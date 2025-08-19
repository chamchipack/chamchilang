import * as React from 'react';

export type Wordbook = { id: string; title: string; count?: number };

// 실제 프로젝트의 Word 타입을 쓰고 싶으면 import 하셔도 됩니다.
// 여기서는 의존 줄이려고 최소 형태만 둡니다.
export type AnyWord = Record<string, any>;

type Options = {
  /** 단어장 목록 불러오기 (없으면 데모 데이터 사용) */
  fetchWordbooks?: () => Promise<Wordbook[]>;
  /** 저장 로직: 선택된 단어장에 word 저장 */
  saveToWordbook?: (wordbookId: string, word: AnyWord) => Promise<void>;
};

const demoData: Wordbook[] = [
  { id: 'wb-1', title: '기초 단어장', count: 128 },
  { id: 'wb-2', title: 'JLPT N5', count: 87 },
  { id: 'wb-3', title: '여행 회화', count: 45 },
];

export default function useVocaModal(opts: Options = {}) {
  const { fetchWordbooks, saveToWordbook } = opts;

  const [visible, setVisible] = React.useState(false);
  const [items, setItems] = React.useState<Wordbook[]>([]);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [pendingWord, setPendingWord] = React.useState<AnyWord | null>(null);
  const [saving, setSaving] = React.useState(false);

  const refresh = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = fetchWordbooks ? await fetchWordbooks() : demoData;
      setItems(data);
      if (!selectedId && data.length) setSelectedId(data[0].id);
    } catch (e) {
      setError('단어장 목록을 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  }, [fetchWordbooks, selectedId]);

  /** 모달 오픈: 현재 단어를 보관해 둔다 */
  const open = React.useCallback(
    async (word: AnyWord) => {
      setPendingWord(word);
      setVisible(true);
      if (!items.length) await refresh();
    },
    [items.length, refresh],
  );

  const close = React.useCallback(() => {
    setVisible(false);
    setPendingWord(null);
    setError(null);
  }, []);

  const select = React.useCallback((id: string) => setSelectedId(id), []);

  const confirm = React.useCallback(async () => {
    if (!selectedId || !pendingWord) return;
    try {
      setSaving(true);
      if (saveToWordbook) {
        await saveToWordbook(selectedId, pendingWord);
      } else {
        // 데모: 실제 저장 로직이 없을 때 콘솔로 확인
        console.log('[VocaModal] save', { selectedId, pendingWord });
        await new Promise(r => setTimeout(r, 400));
      }
      setVisible(false);
      setPendingWord(null);
    } catch (e) {
      setError('저장 중 오류가 발생했어요.');
    } finally {
      setSaving(false);
    }
  }, [selectedId, pendingWord, saveToWordbook]);

  return {
    // state
    visible,
    items,
    selectedId,
    loading,
    error,
    saving,
    // actions
    open,
    close,
    select,
    refresh,
    confirm,
  };
}
