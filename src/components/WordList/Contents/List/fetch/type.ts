import { Word } from '../../../../../config/type/language';

export type WordListApiResponse = {
  data?: {
    items?: unknown; // 검증은 zod로 할 거라 unknown으로 받는 게 안전
    totalCount?: number;
  };
};

export type WordListResult = {
  items: Word[];
  totalCount: number;
};
