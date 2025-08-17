// src/hooks/useNavigateCreateWord.ts
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// 네비게이션 스택 타입 정의 (프로젝트에 맞게 수정)
type RootStackParamList = {
  home: undefined;
  createword: undefined;
  // ...다른 스크린들
};

type CreateWordNav = StackNavigationProp<RootStackParamList, 'createword'>;

export function useNavigateCreateWord() {
  const navigation = useNavigation<CreateWordNav>();

  const goToCreateWord = () => {
    navigation.navigate('createword');
  };

  return goToCreateWord;
}
