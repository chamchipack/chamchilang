// src/components/common/Input/index.tsx
import React, { useRef } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import { styles } from './style';
import useSearch from './hooks/useSearch';

export default function Input() {
  const { query, setQuery, submit } = useSearch({ targetRoute: 'wordlist' });
  const inputRef = useRef<TextInput>(null);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => {
        // 박스 전체를 눌러도 검색 제출 (혹은 포커스만 원하면 inputRef.current?.focus())
        submit();
      }}>
      {/* 왼쪽 아이콘 (탭해도 제출) */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={submit}
        style={styles.icon}>
        <Search size={20} color="#8E8E93" />
      </TouchableOpacity>

      {/* 입력창 */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="검색어를 입력하세요"
        placeholderTextColor="#8E8E93"
        value={query}
        onChangeText={setQuery}
        returnKeyType="search"
        onSubmitEditing={submit} // 엔터로 검색
      />
    </TouchableOpacity>
  );
}
