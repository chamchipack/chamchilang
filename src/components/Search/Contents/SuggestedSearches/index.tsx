import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';

const THEMES = [
  { id: 'n3', title: 'JLPT N3 자주 나오는 단어', subtitle: '빈출 어휘·표현' },
  { id: 'daily', title: '일상 회화 필수 표현', subtitle: '초중급 회화' },
  { id: 'biz', title: '비즈니스 회화 키워드', subtitle: '회의·메일·전화' },
  { id: 'travel', title: '여행 필수 단어', subtitle: '교통·숙소·맛집' },
];

export default function SuggestedSearches() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <View style={styles.cardBadge}>
        <Text style={styles.badgeText}>추천</Text>
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.cardSubtitle} numberOfLines={1}>
        {item.subtitle}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>추천 검색</Text>
        <Text style={styles.action}>더보기</Text>
      </View>

      {/* Horizontal Cards */}
      <FlatList
        data={THEMES}
        keyExtractor={it => it.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
