import { useQuery } from '@tanstack/react-query';
import { fetchWordList } from '../fetch';

interface Props {
  page: number;
  limit: number;
  query: string;
  jlpt?: string;
}

export function useWordList(p: Props) {
  return useQuery({
    queryKey: [p.page, p.limit, p.query, p.jlpt],
    queryFn: () =>
      fetchWordList({
        page: p.page,
        limit: p.limit,
        query: p.query,
        jlpt: p.jlpt,
      }),
    // staleTime: 1000 * 60,
    // gcTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  });
}
