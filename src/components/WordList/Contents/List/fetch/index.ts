import z from 'zod';
import { HOST } from '../../../../../config/host';
import { WordListApiResponse, WordListResult } from './type';
import { buildQuery } from '../../../../../config/fetch/query';
import { WordSchema } from '../../../../../config/type/language';

const WordArraySchema = z.array(WordSchema);

export type Params = {
  page: number;
  limit: number;
  query: string;
  jlpt?: string;
};

export async function fetchWordList(params: Params): Promise<WordListResult> {
  try {
    const query = buildQuery(params);
    const url = `${HOST}/api/word${query ? `?${query}` : ''}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json: WordListApiResponse = await res.json();
    const rawItems = json?.data?.items ?? [];
    const totalCount = Number(json?.data?.totalCount ?? 0);

    // 리스트 검증
    const parsed = WordArraySchema.safeParse(rawItems);
    if (!parsed.success) {
      console.error('Blog API validation failed:', parsed.error.format());
      return { items: [], totalCount };
    }

    return { items: parsed.data, totalCount };
  } catch (err) {
    console.error('fetch word list failed:', err);
    return { items: [], totalCount: 0 };
  }
}
