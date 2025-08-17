// src/components/common/Input/hooks/useGoBack.ts
import { useNavigation } from '@react-navigation/native';

type Options = {
  fallbackRoute?: string; // 뒤로 갈 스택이 없을 때 이동할 라우트(선택)
};

export default function useGoBack(options: Options = {}) {
  const navigation: any = useNavigation();

  return () => {
    try {
      if (navigation?.canGoBack?.()) {
        navigation.goBack();
      } else if (options.fallbackRoute) {
        navigation.navigate(options.fallbackRoute as never);
      }
      // fallback이 없으면 아무 것도 하지 않음
    } catch {
      // navigation 컨텍스트가 없을 경우를 대비한 안전장치
    }
  };
}
