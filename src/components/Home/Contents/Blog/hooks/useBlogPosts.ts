import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '../fetch';

interface Props {
  page: number;
  limit: number;
}

export function useBlogPosts({ page = 1, limit = 5 }: Props) {
  return useQuery({
    queryKey: [page, limit],
    queryFn: () => fetchBlogPosts({ page, limit }),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  });
}
