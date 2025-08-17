import React, { useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TextInputProps,
} from 'react-native';
import { Search, X, ChevronLeft } from 'lucide-react-native';
import { styles } from './style';
import useGoBack from './hooks/useGoBack';

type Props = {
  value: string;
  onChangeText: (t: string) => void;
  onSubmitEditing?: () => void;
  onFocus?: () => void;
  loading?: boolean;
  autoFocus?: boolean;
} & Omit<
  TextInputProps,
  'value' | 'onChangeText' | 'onSubmitEditing' | 'onFocus'
>;

export default function Input({
  value,
  onChangeText,
  onSubmitEditing,
  onFocus,
  loading = false,
  autoFocus = false,
  ...rest
}: Props) {
  const inputRef = useRef<TextInput>(null);
  const goBack = useGoBack(); // 필요 시 useGoBack({ fallbackRoute: 'home' })

  return (
    <View style={styles.wrapper}>
      {/* ⬅️ 인풋 박스 '밖'에 위치한 뒤로가기 버튼 */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={styles.backBtn}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
        <ChevronLeft size={20} color="#8E8E93" />
      </TouchableOpacity>

      {/* 입력 박스 */}
      <View style={styles.container}>
        {/* 왼쪽: 검색 아이콘 */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onSubmitEditing?.()}
          style={styles.icon}>
          <Search size={20} color="#8E8E93" />
        </TouchableOpacity>

        {/* 입력창 (제어형) */}
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="검색어를 입력하세요"
          placeholderTextColor="#8E8E93"
          value={value}
          onChangeText={onChangeText}
          returnKeyType="search"
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          autoFocus={autoFocus}
          {...rest}
        />

        {/* 우측: 로딩 or 지우기 */}
        {loading ? (
          <ActivityIndicator />
        ) : value.length > 0 ? (
          <TouchableOpacity
            onPress={() => onChangeText('')}
            activeOpacity={0.7}>
            <X size={18} color="#8E8E93" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
