import React, { useMemo, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {
  Eye,
  EyeOff,
  CheckSquare,
  Square,
  MoreHorizontal,
} from 'lucide-react-native';
import { styles } from './style';

type WordRow = {
  id: string;
  word: string;
  reading?: string;
  meaning: string;
  memorized?: boolean; // 외움 여부
};

const MOCK_DATA: WordRow[] = [
  {
    id: '1',
    word: '勉強',
    reading: 'べんきょう',
    meaning: '공부',
    memorized: false,
  },
  {
    id: '2',
    word: '食べる',
    reading: 'たべる',
    meaning: '먹다',
    memorized: true,
  },
  {
    id: '3',
    word: '面白い',
    reading: 'おもしろい',
    meaning: '재미있다',
    memorized: false,
  },
  {
    id: '4',
    word: '早い',
    reading: 'はやい',
    meaning: '빠르다/이르다',
    memorized: false,
  },
  {
    id: '5',
    word: '会社',
    reading: 'かいしゃ',
    meaning: '회사',
    memorized: true,
  },
];

export default function WordList({
  title = '단어장 이름',
  data = MOCK_DATA,
}: {
  title?: string;
  data?: WordRow[];
}) {
  // 개별 단어의 "뜻 보이기" 상태
  const [visibleMap, setVisibleMap] = useState<Record<string, boolean>>({});
  // 개별 단어의 외움 상태 (UI 로컬 상태)
  const [memoMap, setMemoMap] = useState<Record<string, boolean>>(
    Object.fromEntries(data.map(d => [d.id, !!d.memorized])),
  );
  // 전체 보기/가리기 토글
  const [allVisible, setAllVisible] = useState(true);

  const total = data.length;
  const memorizedCount = useMemo(
    () => Object.values(memoMap).filter(Boolean).length,
    [memoMap],
  );

  const toggleRowVisible = useCallback((id: string) => {
    setVisibleMap(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleMemorized = useCallback((id: string) => {
    setMemoMap(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const setAllRowsVisible = useCallback((v: boolean) => {
    setAllVisible(v);
  }, []);

  const renderItem = ({ item }: { item: WordRow }) => {
    const isMemorized = !!memoMap[item.id];
    const isVisible = allVisible ? visibleMap[item.id] ?? true : false;

    return (
      <View style={styles.card}>
        {/* 좌측: 외움 체크 */}
        <TouchableOpacity
          style={styles.memBtn}
          activeOpacity={0.8}
          onPress={() => toggleMemorized(item.id)}>
          {isMemorized ? (
            <CheckSquare size={20} color="#22C55E" />
          ) : (
            <Square size={20} color="#8E8E93" />
          )}
        </TouchableOpacity>

        {/* 본문 */}
        <View style={styles.body}>
          <View style={styles.rowTop}>
            <View style={styles.wordWrap}>
              <Text style={styles.word} numberOfLines={1}>
                {item.word}
              </Text>
              {!!item.reading && (
                <Text style={styles.reading} numberOfLines={1}>
                  {item.reading}
                </Text>
              )}
            </View>

            {/* 우측 액션: 가리기/보이기 + 메뉴 */}
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.iconBtn}
                activeOpacity={0.8}
                onPress={() => toggleRowVisible(item.id)}>
                {isVisible ? (
                  <Eye size={18} color="#E5E7EB" />
                ) : (
                  <EyeOff size={18} color="#8E8E93" />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn} activeOpacity={0.8}>
                <MoreHorizontal size={18} color="#8E8E93" />
              </TouchableOpacity>
            </View>
          </View>

          {/* 의미 영역: 가림/표시 */}
          <View style={[styles.meaningBox, !isVisible && styles.meaningHidden]}>
            {isVisible ? (
              <Text style={styles.meaningText} numberOfLines={2}>
                {item.meaning}
              </Text>
            ) : (
              <Text style={styles.hiddenText}>•••••••</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const ListHeader = (
    <View style={styles.header}>
      <View style={styles.headerTexts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub}>
          {total}개 · 외움 {memorizedCount}개
        </Text>
      </View>

      <View style={styles.headerActions}>
        {/* 전체 가리기/보이기 토글 */}
        <TouchableOpacity
          style={styles.toggleAllBtn}
          activeOpacity={0.85}
          onPress={() => setAllRowsVisible(!allVisible)}>
          {allVisible ? (
            <Eye size={16} color="#fff" />
          ) : (
            <EyeOff size={16} color="#fff" />
          )}
          <Text style={styles.toggleAllText}>
            {allVisible ? '전체 보임' : '전체 가림'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {ListHeader}

      <FlatList
        data={data}
        keyExtractor={it => it.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
