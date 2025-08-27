import { useQuery } from '@tanstack/react-query';
import { fetchWord } from '../fetch';

interface Props {
  wordId: string;
  userId?: string;
}

export function useWord(p: Props) {
  return useQuery({
    queryKey: [p.wordId, p.userId],
    queryFn: () =>
      fetchWord({
        wordId: p.wordId,
        userId: p.userId,
      }),
    // staleTime: 1000 * 60,
    // gcTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  });
}
