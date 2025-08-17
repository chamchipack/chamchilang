import { useNavigation } from '@react-navigation/native';

export default function useNavigateToWordView() {
  const navigation = useNavigation();

  return (id: string) => {
    // 필요하면 파라미터 구조(id 외 추가) 맞춰서 사용
    (navigation as any).navigate('wordview', { id });
  };
}
