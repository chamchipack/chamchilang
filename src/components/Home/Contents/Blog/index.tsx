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

export type BlogPost = {
  id: string;
  title: string;
  thumbnail?: any; // require(...) or { uri: string }
};

type Props = {
  posts?: BlogPost[];
  style?: ViewStyle;
  onPressMore?: () => void;
  onPressPost?: (post: BlogPost) => void;
  title?: string; // 기본: 인기 글
  moreLabel?: string; // 기본: 더보기
};

const mockPosts: BlogPost[] = Array.from({ length: 5 }, (_, i) => ({
  id: `post-${i + 1}`,
  title: `블로그 글 제목 ${i + 1}`,
  // thumbnail: require('../../images/sample-thumb.png'),
}));

export default function Blog({
  posts = mockPosts,
  style,
  onPressMore,
  onPressPost,
  title = '인기 글',
  moreLabel = '더보기',
}: Props) {
  // 기본 동작: bloglist로 이동 (필요시 routeName/모드 변경 가능)
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
          <Image source={item.thumbnail} style={styles.thumb} />
        ) : (
          <View style={styles.thumbPlaceholder}>
            <Text style={styles.thumbPlaceholderText}>이미지가 없어요!</Text>
          </View>
        )}
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.title}
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

      {/* Horizontal list */}
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
