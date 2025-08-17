/** ====== Meta Schemas ====== */

import z from 'zod';
import { BaseWordSchema } from '..';
import { PartOfSpeechSchema } from '../atoms';

export const AdjMetaSchema = z.object({
  form: z.enum(['i', 'na']), // い형 / な형
  stem: z.object({ jp: z.string(), ro: z.string() }),
  ending: z.object({ jp: z.string(), ro: z.string() }),
});

export const AdjWordSchema = BaseWordSchema.extend({
  type: z.literal(PartOfSpeechSchema.enum.adj),
  meta: AdjMetaSchema,
});
