import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 네비게이션 파라미터 타입 정의
type RootStackParamList = {
  vocawordlist: { bookId: string; title?: string };
  // 필요하다면 다른 스크린도 정의
};

type Nav = NativeStackNavigationProp<RootStackParamList, 'vocawordlist'>;

export default function useNavigateToVocaWordList() {
  const navigation = useNavigation<Nav>();

  // 단어장 ID/제목 전달
  const go = (bookId: string, title?: string) => {
    navigation.navigate('vocawordlist', { bookId, title });
  };

  return go;
}
