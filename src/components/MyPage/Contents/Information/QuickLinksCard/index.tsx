import React from 'react';
import { View } from 'react-native';
import { Bookmark, Clock, Heart, BookPlus } from 'lucide-react-native';
import { styles } from './style';
import ListItem from '../atoms/ListItem';
import Divider from '../atoms/Divider';
import { useNavigateCreateWord } from './hooks/useNavigateCreateWord';

export default function QuickLinksCard() {
  const goToCreateWord = useNavigateCreateWord();

  return (
    <View style={styles.card}>
      <ListItem
        icon={<Bookmark size={20} color="#8E8E93" />}
        title="단어장"
        subtitle="내가 저장한 단어 모아보기"
      />
      <Divider />
      <ListItem
        icon={<BookPlus size={20} color="#8E8E93" />}
        title="새 단어 추가"
        subtitle="어플에 새로운 단어 등록"
        onPress={goToCreateWord}
      />
      <Divider />
      <ListItem
        icon={<Clock size={20} color="#8E8E93" />}
        title="최근 본 단어"
        subtitle="방금 본 단어부터 쉽게 복습"
      />
      <Divider />
      <ListItem
        icon={<Heart size={20} color="#8E8E93" />}
        title="찜한 예문"
        subtitle="좋아요 표시한 문장"
      />
    </View>
  );
}
