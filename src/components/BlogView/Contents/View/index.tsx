import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './style';

export default function BlogView() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* 제목 */}
      <Text style={styles.title}>일본어 공부 꿀팁 모음</Text>

      {/* 메타 정보 */}
      <View style={styles.meta}>
        <Text style={styles.author}>작성자: 홍길동</Text>
        <Text style={styles.date}>2025-08-16</Text>
      </View>

      {/* 썸네일 */}
      <Image
        style={styles.thumbnail}
        source={{
          uri: 'https://placehold.co/600x300?text=Blog+Thumbnail',
        }}
      />

      {/* 본문 */}
      <View style={styles.body}>
        <Text style={styles.paragraph}>
          일본어를 효과적으로 공부하기 위해서는 꾸준한 반복과 실전 활용이
          중요합니다. 교재만으로 공부하기보다는, 일상 속에서 실제로 일본어를
          사용하려는 노력이 필요합니다.
        </Text>
        <Text style={styles.paragraph}>
          예를 들어, 일본 드라마나 애니메이션을 자막 없이 시청해 보거나, 일본
          뉴스를 꾸준히 청취하는 것이 큰 도움이 됩니다. 또한, 단어장을 만들고
          매일 복습하는 습관도 필요합니다.
        </Text>
        <Text style={styles.paragraph}>
          마지막으로, 언어 교환 친구를 사귀어 실제 대화를 자주 나누는 것이 가장
          빠른 학습 방법 중 하나입니다.
        </Text>
      </View>
    </ScrollView>
  );
}
