import z from 'zod';
import { BaseWordSchema } from '..';

export const NounWordSchema = BaseWordSchema.extend({
  type: z.literal('noun'),
  // 명사는 meta 없음(선택적으로 undefined 허용)
  meta: z.undefined().optional(),
});
