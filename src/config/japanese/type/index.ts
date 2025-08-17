import { z } from 'zod';

/** ====== Atomic Schemas ====== */
export const EndingRoSchema = z.enum([
  'u',
  'ku',
  'gu',
  'su',
  'mu',
  'nu',
  'bu',
  'tsu',
  'ru',
  'suru',
]);

export const TokenSchema = z.object({
  jp: z.string(),
  reading: z.string().optional(),
});

export const ExampleSchema = z.object({
  id: z.string(),
  jp: z.string(),
  tokens: z.array(TokenSchema), // 예문 토큰(루비용)
  ko: z.string(),
  ro: z.string().optional(),
});

export const SenseSchema = z.object({
  meaning: z.string(),
  notes: z.string(),
  tags: z.array(z.string()).optional(),
});

/** ====== Base Word (공통 필드) ====== */
export const BaseWordSchema = z.object({
  id: z.string(),
  language: z.literal('japanese'),
  jp: z.string(),
  kana: z.string(),
  ro: z.string(),
  type: z.enum(['verb', 'adj', 'noun']),
  jlpt: z.enum(['N1', 'N2', 'N3', 'N4', 'N5']),
  exception: z.boolean().optional(),
  senses: z.array(SenseSchema).optional(),
  examples: z.array(ExampleSchema).optional(),
});

/** ====== Meta Schemas ====== */
export const VerbMetaSchema = z.object({
  form: z.union([z.literal(1), z.literal(2), z.literal(3)]), // 오단/1단/불규칙
  stem: z.object({ jp: z.string(), ro: z.string() }),
  ending: z.object({ jp: z.string(), ro: EndingRoSchema }),
});

export const AdjMetaSchema = z.object({
  form: z.enum(['i', 'na']), // い형 / な형
  stem: z.object({ jp: z.string(), ro: z.string() }),
  ending: z.object({ jp: z.string(), ro: z.string() }),
});

/** ====== Discriminated Word Schemas ====== */
export const VerbWordSchema = BaseWordSchema.extend({
  type: z.literal('verb'),
  meta: VerbMetaSchema,
});

export const AdjWordSchema = BaseWordSchema.extend({
  type: z.literal('adj'),
  meta: AdjMetaSchema,
});

export const NounWordSchema = BaseWordSchema.extend({
  type: z.literal('noun'),
  // 명사는 meta 없음(선택적으로 undefined 허용)
  meta: z.undefined().optional(),
});

/** 단일 Word 스키마 (type으로 분기) */
export const WordSchema = z.discriminatedUnion('type', [
  VerbWordSchema,
  AdjWordSchema,
  NounWordSchema,
]);

/** ====== TS Types (선택) ====== */
export type EndingRo = z.infer<typeof EndingRoSchema>;
export type Example = z.infer<typeof ExampleSchema>;
export type VerbMeta = z.infer<typeof VerbMetaSchema>;
export type AdjMeta = z.infer<typeof AdjMetaSchema>;
export type VerbWord = z.infer<typeof VerbWordSchema>;
export type AdjWord = z.infer<typeof AdjWordSchema>;
export type NounWord = z.infer<typeof NounWordSchema>;
export type Word = z.infer<typeof WordSchema>;

/** ====== 샘플 데이터 & 검증 ====== */
export const nagareru: VerbWord = {
  type: 'verb',
  id: '1',
  language: 'japanese',
  jp: '流れる',
  kana: 'ながれる',
  ro: 'nagareru',
  exception: false,
  jlpt: 'N5',
  senses: [
    {
      meaning: '흐르다',
      notes: '물이 흐르다 등등',
    },
    {
      meaning: '먹다',
      notes: '음식을 섭취하다. 일상 회화에서 매우 자주 사용.',
      tags: ['일상', '기초'],
    },
  ],
  meta: {
    form: 2,
    stem: { jp: '流れ', ro: 'nagare' },
    ending: { jp: 'る', ro: 'ru' },
  },
  examples: [
    {
      id: 'ex1',
      jp: '川が流れている。',
      tokens: [
        { jp: '川', reading: 'かわ' },
        { jp: 'が' },
        { jp: '流れ', reading: 'ながれ' },
        { jp: 'ている。' },
      ],
      ko: '강이 흐르고 있다.',
      ro: 'kawa ga nagarete iru.',
    },
  ],
};

export const atsui: AdjWord = {
  type: 'adj',
  id: '2',
  language: 'japanese',
  jp: '厚い',
  kana: 'あつい',
  ro: 'atsui',
  jlpt: 'N4',
  senses: [
    {
      meaning: '먹다',
      notes: '음식을 섭취하다. 일상 회화에서 매우 자주 사용.',
      tags: ['일상', '기초'],
    },
    {
      meaning: '(비유) 소비하다',
      notes: '시간/자원을 소비한다는 의미로도 사용될 수 있음.',
      tags: ['비유'],
    },
  ],
  exception: false,
  meta: {
    form: 'i',
    stem: { jp: '厚', ro: 'atsu' },
    ending: { jp: 'い', ro: 'i' },
  },
};

// 사용 예: 런타임 검증
WordSchema.parse(nagareru);
WordSchema.parse(atsui);
