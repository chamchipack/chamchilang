import z from 'zod';
import { EndingRoSchema, PartOfSpeechSchema } from '../atoms';
import { BaseWordSchema } from '..';

/** ====== Meta Schemas ====== */
export const VerbMetaSchema = z.object({
  form: z.union([z.literal(1), z.literal(2), z.literal(3)]), // 오단/1단/불규칙
  stem: z.object({ jp: z.string(), ro: z.string() }),
  ending: z.object({ jp: z.string(), ro: EndingRoSchema }),
});

export const VerbWordSchema = BaseWordSchema.extend({
  type: z.literal(PartOfSpeechSchema.enum.verb),
  meta: VerbMetaSchema,
});
