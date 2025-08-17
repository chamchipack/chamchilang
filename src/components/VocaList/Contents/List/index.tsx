import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MoreHorizontal, Plus } from 'lucide-react-native';
import { styles } from './style';
import useNavigateToVocaWordList from './hooks/useNavigateToVocaWordList';

type VocabBook = {
  id: string;
  title: string;
  count: number;
  updatedAt: string; // '2025-08-16' 같은 포맷 가정
  progress?: number; // 0~1 사이 (학습 진행)
  color?: string; // 왼쪽 컬러 바(옵션)
};

const MOCK_DATA: VocabBook[] = [
  {
    id: '1',
    title: 'N3 핵심 어휘',
    count: 312,
    updatedAt: '2025-08-14',
    progress: 0.42,
    color: '#0A84FF',
  },
  {
    id: '2',
    title: '일상 회화 표현',
    count: 128,
    updatedAt: '2025-08-12',
    progress: 0.18,
    color: '#FFD166',
  },
  {
    id: '3',
    title: '비즈니스 필수',
    count: 86,
    updatedAt: '2025-08-10',
    progress: 0.67,
    color: '#22C55E',
  },
  {
    id: '4',
    title: '여행 회화',
    count: 54,
    updatedAt: '2025-08-01',
    progress: 0.05,
    color: '#F472B6',
  },
];

export default function VocabList({
  data = MOCK_DATA,
  headerTitle = '단어장',
  showCreate = true,
}: {
  data?: VocabBook[];
  headerTitle?: string;
  showCreate?: boolean;
}) {
  const navigateToVocaWordList = useNavigateToVocaWordList();

  const renderItem = ({ item }: { item: VocabBook }) => {
    const pct = Math.max(0, Math.min(1, item.progress ?? 0));
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => navigateToVocaWordList(item.id, item.title)}>
        {/* 좌측 컬러 바 */}
        <View
          style={[
            styles.colorBar,
            { backgroundColor: item.color ?? '#2B2B2E' },
          ]}
        />

        {/* 본문 */}
        <View style={styles.body}>
          <View style={styles.rowTop}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <MoreHorizontal size={18} color="#8E8E93" />
            </TouchableOpacity>
          </View>

          <Text style={styles.meta}>
            {item.count}개 · 업데이트 {item.updatedAt}
          </Text>

          {/* 진행바 */}
          <View style={styles.progressWrap}>
            <View style={styles.progressBg} />
            <View style={[styles.progressFg, { width: `${pct * 100}%` }]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {showCreate && (
        <TouchableOpacity style={styles.createBtn} activeOpacity={0.85}>
          <Plus size={16} color="#fff" />
          <Text style={styles.createText}>새 단어장</Text>
        </TouchableOpacity>
      )}
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
