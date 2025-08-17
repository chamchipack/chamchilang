import React, { useMemo, useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import Input from '../Contents/Input';
import List from '../Contents/List';
import { styles } from './style';
import useDebounced from './hooks/useDebounced';
import useSearch from './hooks/useSearch';

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
  defaultQuery = 'asdfafs',
}: WordListContainerProps) {
  // 입력/포커스 상태
  const [query, setQuery] = useState(defaultQuery);
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
      {/* ⚠️ 현재 ./Contents/Input 이 제어형 props를 안 받는다면
          props 추가 필요. 임시로 any 캐스팅 없이도 동작하도록
          Input 컴포넌트가 value/onChangeText/onSubmitEditing/onFocus/loading
          를 받게 수정하는걸 추천합니다. */}
      <Input
        {...({
          value: query,
          onChangeText: setQuery,
          onFocus: () => setFocused(true),
          onSubmitEditing: submit,
          loading,
        } as any)}
      />

      {focused ? Overlay : <List query={debounced} items={items} />}
    </>
  );
}
