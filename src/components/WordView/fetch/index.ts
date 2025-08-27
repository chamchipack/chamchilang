import z from 'zod';
import { WordApiResponse, WordResult } from './type';
import { WordSchema } from '../../../config/type/language';
import { buildQuery } from '../../../config/fetch/query';
import { HOST } from '../../../config/host';

export type Params = {
  wordId: string;
  userId?: string;
};

export async function fetchWord(params: Params): Promise<WordResult | null> {
  try {
    const query = buildQuery({ userId: params.userId });

    const url = `${HOST}/api/word/${params.wordId}${query ? `?${query}` : ''}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json: WordApiResponse = await res.json();
    const rawItem = json?.data;

    // 리스트 검증
    const parsed = WordSchema.safeParse(rawItem);
    if (!parsed.success) {
      console.error('Blog API validation failed:', parsed.error.format());
      return null;
    }

    return parsed?.data;
  } catch (err) {
    console.error('fetch word list failed:', err);
    return null;
  }
}
