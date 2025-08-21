import z from 'zod';
import { BaseWordSchema } from '..';
import { EndingRoSchema } from '../atoms';

export const NounMetaSchema = z.object({
  isVerbAvailable: z.boolean(),
  stem: z.object({ jp: z.string(), ro: z.string() }),
  ending: z.object({ jp: z.string(), ro: EndingRoSchema }),
});

export const NounWordSchema = BaseWordSchema.extend({
  type: z.literal('noun'),
  meta: NounMetaSchema,
});
