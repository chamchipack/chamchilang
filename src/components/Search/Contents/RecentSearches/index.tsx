import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style';

const MOCK_RECENTS = [
  '食べる',
  'ありがとう',
  '会社',
  '勉強',
  '時間',
  '面白い',
  '買い物',
];

export default function RecentSearches() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>최근 검색어</Text>
        <Text style={styles.action}>모두 지우기</Text>
      </View>

      {/* Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsWrap}>
        {MOCK_RECENTS.map(item => (
          <TouchableOpacity key={item} style={styles.chip} activeOpacity={0.8}>
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
