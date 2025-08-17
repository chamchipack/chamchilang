import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import { styles } from './style';
import useGoToSearch from './hooks/useGoToSearch';

export default function Input() {
  const goToSearch = useGoToSearch();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={goToSearch}>
      {/* 왼쪽 아이콘 */}
      <Search size={20} color="#8E8E93" style={styles.icon} />

      {/* 입력창 (읽기 전용으로 클릭 유도) */}
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        placeholderTextColor="#8E8E93"
        editable={false} // 직접 입력 방지, 클릭 시 페이지 이동
        pointerEvents="none" // 포커스 막기
      />
    </TouchableOpacity>
  );
}
