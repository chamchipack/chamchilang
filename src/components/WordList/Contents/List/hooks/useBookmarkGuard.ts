// src/hooks/useBookmarkGuard.ts
import { useRef } from 'react';

export default function useBookmarkGuard(delay = 600) {
  const locked = useRef<Set<string>>(new Set());

  const press = (key: string, action: () => void) => {
    if (locked.current.has(key)) return; // 이미 처리 중이면 무시
    locked.current.add(key);

    try {
      action(); // 여기서 실제 북마크 토글/요청 수행
    } finally {
      setTimeout(() => {
        locked.current.delete(key);
      }, delay);
    }
  };

  return press;
}
