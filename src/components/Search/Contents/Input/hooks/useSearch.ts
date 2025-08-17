// src/hooks/useSearch.ts
import { useCallback, useState } from 'react';
import useNavigateToList from './useNavigateToList';

type UseSearchOptions = {
  targetRoute?: string; // 이동할 라우트 이름
};

export default function useSearch(options?: UseSearchOptions) {
  const [query, setQuery] = useState('');
  const navigateToList = useNavigateToList({
    targetRoute: options?.targetRoute,
  });

  const submit = useCallback(() => {
    const q = query.trim();
    if (!q) return;
    navigateToList(q);
  }, [query, navigateToList]);

  return { query, setQuery, submit };
}
