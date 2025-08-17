import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image as RNImage,
} from 'react-native';
import { Image as ImageIcon, ChevronRight } from 'lucide-react-native';
import { styles } from './style';
import useNavigateToBlogView from './hooks/useNavigateToBlogView';

export type BlogItem = {
  id: string;
  title: string;
  thumbnail?: string; // 이미지 URL
  excerpt?: string; // 미리보기 내용
  updatedAt?: string; // '2025-08-16' 등 (선택)
};

type Props = {
  data: BlogItem[];
  onPress?: (item: BlogItem) => void;
  headerTitle?: string;
};

const Thumb: React.FC<{ uri?: string }> = ({ uri }) => {
  const [failed, setFailed] = useState(!uri);
  if (failed) {
    return (
      <View style={styles.thumbFallback}>
        <ImageIcon size={20} color="#8E8E93" />
      </View>
    );
  }
  return (
    <RNImage
      source={{ uri: uri! }}
      style={styles.thumb}
      onError={() => setFailed(true)}
      resizeMode="cover"
    />
  );
};

export default function BlogList({
  data,
  onPress,
  headerTitle = '인기 글',
}: Props) {
  const goBlogView = useNavigateToBlogView({ routeName: 'blogview' });

  const renderItem = ({ item }: { item: BlogItem }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.row}
      onPress={() => (onPress ? onPress(item) : goBlogView(item))}>
      <Thumb uri={item.thumbnail} />

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        {!!item.excerpt && (
          <Text style={styles.excerpt} numberOfLines={2}>
            {item.excerpt}
          </Text>
        )}
        {!!item.updatedAt && <Text style={styles.meta}>{item.updatedAt}</Text>}
      </View>

      <ChevronRight size={18} color="#8E8E93" />
    </TouchableOpacity>
  );

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {/* 필요 시 "더보기" 버튼 추가 가능
      <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
        <Text style={styles.more}>더보기</Text>
      </TouchableOpacity> */}
    </View>
  );

  const ListEmpty = (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>표시할 블로그 글이 없어요.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {ListHeader}
      <FlatList
        data={data}
        keyExtractor={it => it.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          data.length === 0 ? styles.emptyContent : undefined
        }
      />
    </View>
  );
}
