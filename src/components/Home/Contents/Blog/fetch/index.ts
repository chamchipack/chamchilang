import z from 'zod';
import { HOST } from '../../../../../config/host';
import {
  BlogApiResponse,
  BlogListResult,
  BlogWithoutUserIdSchema,
} from './type';
import { buildQuery } from '../../../../../config/fetch/query';

export type FetchBlogParams = {
  page: number;
  limit: number;
};

export async function fetchBlogPosts(
  params: FetchBlogParams,
): Promise<BlogListResult> {
  try {
    const query = buildQuery(params);
    const url = `${HOST}/api/blog${query ? `?${query}` : ''}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json: BlogApiResponse = await res.json();
    const rawItems = json?.data?.items ?? [];
    const totalCount = Number(json?.data?.totalCount ?? 0);

    // 리스트 검증
    const parsed = z.array(BlogWithoutUserIdSchema).safeParse(rawItems);
    console.log(parsed);
    if (!parsed.success) {
      console.error('Blog API validation failed:', parsed.error.format());
      return { items: [], totalCount };
    }

    return { items: parsed.data, totalCount };
  } catch (err) {
    console.error('fetchBlogPosts failed:', err);
    return { items: [], totalCount: 0 };
  }
}
