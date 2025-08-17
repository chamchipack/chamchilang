// src/hooks/useNavigateToList.ts
import { useNavigation } from '@react-navigation/native';

type Params = { targetRoute?: string };

export default function useNavigateToList({
  targetRoute = 'search',
}: Params = {}) {
  const navigation = useNavigation();

  const go = (q: string) => {
    (navigation as any).navigate(targetRoute, { q }); // ← 캐스팅으로 에러 회피
  };

  return go;
}
