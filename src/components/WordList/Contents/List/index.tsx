// src/components/WordList/Contents/index.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { Bookmark, ChevronRight } from 'lucide-react-native';
import { styles } from './style';
import useNavigateToWordView from './hooks/useNavigateToWordView';
import useBookmarkGuard from './hooks/useBookmarkGuard';
import { useWordList } from './hooks/useWordList';
import { Word } from '../../../../config/type/language';

type Props = {
  query?: string;
  onToggleBookmark?: (id: string) => void;
};

export default function Contents({
  query = '검색어',
  onToggleBookmark,
}: Props) {
  const goWordView = useNavigateToWordView();
  const guardBookmark = useBookmarkGuard(600);

  const handleRowPress = (wordId: string) => {
    goWordView(wordId);
  };

  const handleBookmarkPress = (e: GestureResponderEvent, id: string) => {
    // 리스트 아이템 onPress로 이벤트 전파되지 않도록
    e.stopPropagation();

    guardBookmark(id, () => {
      // 실제 토글 동작은 부모에서 주입할 수도 있고, 여기서 직접 처리해도 됨
      // 여기서는 데모로 콘솔만
      if (onToggleBookmark) onToggleBookmark(id);
      else console.log('toggle bookmark:', id);
    });
  };

  const { data, isLoading, isError, refetch } = useWordList({
    page: 1,
    limit: 5,
    query: query,
  });

  const items = data?.items ?? [];

  const renderItem = ({ item }: { item: Word }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.85}
        onPress={() => handleRowPress(item._id)}>
        {/* 좌측 단어/읽기 */}
        <View style={styles.left}>
          <Text style={styles.word} numberOfLines={1}>
            {item.jp}
          </Text>
          {!!item.kana && (
            <Text style={styles.reading} numberOfLines={1}>
              {item.kana}
            </Text>
          )}
        </View>

        {/* 중앙 의미 + 배지 */}
        <View style={styles.middle}>
          <Text style={styles.meaning} numberOfLines={1}>
            {item?.senses?.[0].meaning || ''}
          </Text>
          <View style={styles.badges}>
            {/* {!!item.ro && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.ro}</Text>
              </View>
            )} */}
            {!!item.jlpt && (
              <View style={[styles.badge, styles.badgeAccent]}>
                <Text style={styles.badgeAccentText}>{item.jlpt}</Text>
              </View>
            )}
          </View>
        </View>

        {/* 우측 액션 */}
        <View style={styles.right}>
          {/* <TouchableOpacity
            activeOpacity={0.7}
            onPress={e => handleBookmarkPress(e, item._id)}>
            <Bookmark
              size={18}
              color={item?.bookmarked ? '#FFD166' : '#8E8E93'}
            />
          </TouchableOpacity> */}
          <ChevronRight size={18} color="#8E8E93" />
        </View>
      </TouchableOpacity>
    );
  };

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.headerTitle} numberOfLines={1}>
        “{query}” 검색 결과
      </Text>
      <Text style={styles.headerCount}>{items.length}건</Text>
    </View>
  );

  const ListEmpty = (
    <View style={styles.empty}>
      <Text style={styles.emptyTitle}>검색 결과가 없습니다</Text>
      <Text style={styles.emptySub}>
        단어를 다시 입력하거나 다른 키워드를 시도해 보세요.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {ListHeader}
      <FlatList
        data={items}
        keyExtractor={it => it._id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={
          items.length === 0 ? styles.emptyContainer : styles.listContainer
        }
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
