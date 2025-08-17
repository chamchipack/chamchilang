import z from 'zod';

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

/** ====== 품사 (Part of Speech) ====== */
export const PartOfSpeechSchema = z.enum(['verb', 'adj', 'noun', 'adv']);
export type PartOfSpeech = z.infer<typeof PartOfSpeechSchema>;

/** ====== JLPT 레벨 ====== */
export const JLPTSchema = z.enum(['N1', 'N2', 'N3', 'N4', 'N5']);
export type JLPT = z.infer<typeof JLPTSchema>;
