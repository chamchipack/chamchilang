import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export default function StatsRow() {
  return (
    <View style={styles.row2col}>
      <View style={styles.statCard}>
        <Text style={styles.statNum}>327</Text>
        <Text style={styles.statLabel}>저장 단어</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statNum}>58</Text>
        <Text style={styles.statLabel}>완료 퀴즈</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statNum}>7</Text>
        <Text style={styles.statLabel}>연속 학습일</Text>
      </View>
    </View>
  );
}
