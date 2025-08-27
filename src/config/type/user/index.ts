import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(), // ObjectId → string으로 변환해 내려오는 값
  socialId: z.string(), // 소셜 아이디
  provider: z.string(), // 소셜 타입 (필요하면 enum으로 제한 가능)
  name: z.string(), // 기본값 '' 이므로 응답에는 항상 문자열
  nickname: z.string(), // 닉네임 (unique 제약은 DB에서 관리)
  isDeleted: z.boolean(), // 삭제 여부 (기본값 false)
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;
