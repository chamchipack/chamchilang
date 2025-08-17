import { useEffect, useState } from 'react';

type WordRow = {
  id: string;
  word: string;
  meaning: string;
  pos?: string;
  jlpt?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  bookmarked?: boolean;
};

export default function useSearch(query: string) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<WordRow[]>([]);

  useEffect(() => {
    let alive = true;

    const run = async () => {
      if (!query?.trim()) {
        setItems([]);
        return;
      }
      setLoading(true);
      try {
        // TODO: 실제 API 연동
        await new Promise(r => setTimeout(r, 200)); // mock latency
        const mock: WordRow[] = [
          {
            id: '1',
            word: query,
            meaning: `${query}의 뜻`,
            pos: '명사',
            jlpt: 'N5',
            bookmarked: false,
          },
          {
            id: '2',
            word: `${query}する`,
            meaning: `${query}하다`,
            pos: '동사',
            jlpt: 'N4',
            bookmarked: true,
          },
          {
            id: '3',
            word: `${query}的`,
            meaning: `${query}적`,
            pos: '형용사',
            jlpt: 'N3',
            bookmarked: false,
          },
        ];
        if (alive) setItems(mock);
      } finally {
        if (alive) setLoading(false);
      }
    };

    run();
    return () => {
      alive = false;
    };
  }, [query]);

  return { loading, items };
}
