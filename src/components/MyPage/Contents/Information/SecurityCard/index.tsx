import React from 'react';
import { View } from 'react-native';
import { Shield, Settings } from 'lucide-react-native';
import { styles } from './style';
import ListItem from '../atoms/ListItem';
import Divider from '../atoms/Divider';

export default function SecurityCard() {
  return (
    <View style={styles.card}>
      <ListItem
        icon={<Shield size={20} color="#8E8E93" />}
        title="계정 보안"
        subtitle="비밀번호/2단계 인증"
      />
      <Divider />
      <ListItem
        icon={<Settings size={20} color="#8E8E93" />}
        title="설정"
        subtitle="알림, 테마, 학습 설정"
      />
    </View>
  );
}
