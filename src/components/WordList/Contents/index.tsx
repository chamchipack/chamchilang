import React, { useMemo, useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import Input from '../Contents/Input';
import List from '../Contents/List';
import { styles } from './style';
import useDebounced from './hooks/useDebounced';
import useSearch from './hooks/useSearch';
import { useRoute } from '@react-navigation/native';

type WordListContainerProps = {
  defaultQuery?: string;
};

/** 프레젠테이션용 서브컴포넌트들 (간단 UI) */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function Chip({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.chip}
      onPress={onPress}
      activeOpacity={0.85}>
      <Text style={styles.chipText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function Container({
  defaultQuery = '',
}: WordListContainerProps) {
  // 입력/포커스 상태
  const route = useRoute();
  const { query: q } = route.params as { query?: string };

  const [query, setQuery] = useState(q || '');
  const [focused, setFocused] = useState(false);

  // 디바운스 검색
  const debounced = useDebounced(query, 300);
  const { loading, items } = useSearch(debounced);

  // 제출(키보드 검색/아이콘 탭)
  const submit = () => {
    Keyboard.dismiss();
    setFocused(false); // 오버레이 닫고 리스트 보여주기
    // TODO: 최근 검색 저장 등 부가 로직
  };

  // 포커스 중엔 오버레이 표시
  const Overlay = useMemo(() => {
    if (!focused) return null;
    const recents = ['旅行', '天気', '食べる', '可愛い'];
    const recommends = ['JLPT N3 빈출', '일상 회화', '비즈니스'];

    return (
      <View style={styles.overlayContainer}>
        <View>
          <SectionTitle>최근 검색</SectionTitle>
          <View style={styles.chipRow}>
            {recents.map(t => (
              <Chip
                key={t}
                label={t}
                onPress={() => {
                  setQuery(t);
                  submit();
                }}
              />
            ))}
          </View>
        </View>

        <View>
          <SectionTitle>추천 검색</SectionTitle>
          <View style={styles.chipRow}>
            {recommends.map(t => (
              <Chip
                key={t}
                label={t}
                onPress={() => {
                  setQuery(t);
                  submit();
                }}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }, [focused]);

  return (
    <>
      <Input
        {...({
          value: query,
          onChangeText: setQuery,
          onFocus: () => setFocused(true),
          onSubmitEditing: submit,
          loading,
        } as any)}
      />

      {focused ? Overlay : <List query={query} />}
    </>
  );
}
