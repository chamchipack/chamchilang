// screens/SketchBook/hooks/useSketchBook.ts
import { useMemo, useState } from 'react';
import { atsui, nagareru } from '../../../../../config/type/language';

const WORDS = [nagareru, atsui];

// 자주 쓰는 조사
const PARTICLES = [
  'は',
  'が',
  'を',
  'に',
  'へ',
  'で',
  'と',
  'や',
  'の',
  'も',
  'から',
  'まで',
  'より',
  'だけ',
  'しか',
];

export function useSketchBook() {
  const [query, setQuery] = useState('');
  const [tokens, setTokens] = useState<string[]>([]);
  const [particlesOpen, setParticlesOpen] = useState(false);

  const filteredWords = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return WORDS;

    return WORDS.filter(w =>
      [w.jp, w.kana, w.ro].some(field => field.toLowerCase().includes(q)),
    );
  }, [query]);

  // 상단 문장에 토큰 추가
  const addToken = (w: string) => {
    setTokens(prev => [...prev, w]);
  };

  // 상단 문장 토큰 제거(롱프레스)
  const removeTokenAt = (index: number) => {
    setTokens(prev => prev.filter((_, i) => i !== index));
  };

  const clearTokens = () => setTokens([]);

  // 조사 모달
  const openParticles = () => setParticlesOpen(true);
  const closeParticles = () => setParticlesOpen(false);
  const addParticle = (p: string) => setTokens(prev => [...prev, p]);

  return {
    query,
    setQuery,
    filteredWords,
    addToken,
    tokens,
    removeTokenAt,
    clearTokens,
    particlesOpen,
    openParticles,
    closeParticles,
    particles: PARTICLES,
    addParticle,
  };
}
