import { z } from 'zod';

export const BookmarkRefTypes = ['word', 'blog', 'example'] as const;
export type BookmarkRefType = (typeof BookmarkRefTypes)[number];

export const BookmarkSchema = z.object({
  id: z.string(), // ObjectId → String 변환해서 내려주는 경우
  userId: z.string(), // User ObjectId
  refType: z.enum(BookmarkRefTypes), // word | blog | example
  refId: z.string(), // 참조 대상 ObjectId
  note: z.string().optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Bookmark = z.infer<typeof BookmarkSchema>;
