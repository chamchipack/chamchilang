import z from 'zod';
import { BlogSchema } from '../../../../../config/type/blog';

export type BlogApiResponse = {
  data?: {
    items?: unknown; // 검증은 zod로 할 거라 unknown으로 받는 게 안전
    totalCount?: number;
  };
};

export const BlogWithoutUserIdSchema = BlogSchema.omit({
  userId: true,
  summary: true,
  category: true,
  markdown_contents: true,
});

export type BlogPost = z.infer<typeof BlogWithoutUserIdSchema>;

export type BlogListResult = {
  items: BlogPost[];
  totalCount: number;
};
