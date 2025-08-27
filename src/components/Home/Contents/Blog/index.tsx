import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ViewStyle,
} from 'react-native';
import { styles } from './style';
import useNavigateToBlogList from './hooks/useNavigateToBlogList';
import useNavigateToBlogView from './hooks/useNavigateToBlogView';
import { useBlogPosts } from './hooks/useBlogPosts';
import { BlogPost } from './fetch/type';

type Props = {
  posts?: BlogPost[];
  style?: ViewStyle;
  onPressMore?: () => void;
  onPressPost?: (post: BlogPost) => void;
  title?: string; // 기본: 인기 글
  moreLabel?: string; // 기본: 더보기
};

export default function Blog({
  style,
  onPressMore,
  onPressPost,
  title = '인기 글',
  moreLabel = '더보기',
}: Props) {
  const { data, isLoading, isError, refetch } = useBlogPosts({
    page: 1,
    limit: 5,
  });

  const posts = data?.items ?? [];
  const total = data?.totalCount ?? 0;

  const goBlogList = useNavigateToBlogList({
    routeName: 'bloglist',
    mode: 'navigate',
  });

  const goBlogView = useNavigateToBlogView({ routeName: 'blogview' });

  const renderItem = ({ item }: { item: BlogPost }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => (onPressPost ? onPressPost(item) : goBlogView(item))}>
      <View style={styles.thumbBox}>
        {item.thumbnail ? (
          <Image source={{ uri: item?.thumbnail }} style={styles.thumb} />
        ) : (
          <View style={styles.thumbPlaceholder}>
            <Text style={styles.thumbPlaceholderText}>이미지가 없어요!</Text>
          </View>
        )}
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.markdown_title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, style]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          onPress={onPressMore ?? goBlogList}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.more}>{moreLabel}</Text>
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      /> */}
      <FlatList
        data={posts}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshing={isLoading}
        // onRefresh={refetch}
        ListEmptyComponent={
          isLoading ? null : (
            <Text style={styles.more}>
              {isError ? '불러오기 실패' : '게시글이 없어요'}
            </Text>
          )
        }
      />
    </View>
  );
}
