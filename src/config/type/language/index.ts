import { z } from 'zod';
import {
  ExampleSchema,
  JLPTSchema,
  PartOfSpeechSchema,
  SenseSchema,
} from './atoms';
import { VerbWordSchema } from './pos/verb';
import { AdjWordSchema } from './pos/adj';
import { NounWordSchema } from './pos/noun';

/** ====== Base Word (공통 필드) ====== */
export const BaseWordSchema = z.object({
  id: z.string(),
  language: z.literal('japanese'),
  jp: z.string(),
  kana: z.string(),
  ro: z.string(),
  type: PartOfSpeechSchema,
  jlpt: JLPTSchema,
  exception: z.boolean().optional(),
  senses: z.array(SenseSchema).optional(),
  examples: z.array(ExampleSchema).optional(),
});

/** ====== Discriminated Word Schemas ====== */
export const WordSchema = z.discriminatedUnion('type', [
  VerbWordSchema,
  AdjWordSchema,
  NounWordSchema,
]);

/** ====== TS Types (선택) ====== */
export type Example = z.infer<typeof ExampleSchema>;

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
