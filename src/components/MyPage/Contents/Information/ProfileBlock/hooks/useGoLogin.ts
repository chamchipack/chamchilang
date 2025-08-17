// src/hooks/navigation/useGoLogin.ts
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 앱의 루트 스택 파라미터 타입
// 이미 프로젝트에 RootStackParamList가 있다면 그걸 import 해서 쓰세요.
type RootStackParamList = {
  login: undefined;
  // 다른 스크린들...
};

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function useGoLogin() {
  const navigation = useNavigation<Nav>();

  const goLogin = React.useCallback(() => {
    navigation.navigate('login');
  }, [navigation]);

  // 상황에 따라 교체/리셋이 필요할 때도 제공
  const replaceLogin = React.useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
  }, [navigation]);

  const resetToLogin = replaceLogin; // alias

  return { goLogin, replaceLogin, resetToLogin };
}
