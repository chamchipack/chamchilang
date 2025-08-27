import { z } from 'zod';

export const BlogSchema = z.object({
  _id: z.string(), // _id 대신 id로 노출
  markdown_title: z.string(), // 제목
  markdown_contents: z.string(), // 본문 (Markdown)
  summary: z.string().optional(), // 요약
  category: z.string().optional(), // 카테고리
  thumbnail: z.string().optional(), // 썸네일 URL
  userId: z.string(), // 작성자 ID
  userName: z.string(), // 작성자 이름
  created: z.coerce.date(), // 생성일
  updated: z.coerce.date(), // 수정일
});

export type Blog = z.infer<typeof BlogSchema>;
