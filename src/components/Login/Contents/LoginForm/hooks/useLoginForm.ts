import * as React from 'react';

/**
 * LoginForm 전용 훅
 * - 실제 로그인 로직(카카오/애플/관리자)은 여기 TODO에 붙이세요.
 */
export default function useLoginForm() {
  const [loadingKakao, setLoadingKakao] = React.useState(false);
  const [loadingApple, setLoadingApple] = React.useState(false);
  const [loadingAdmin, setLoadingAdmin] = React.useState(false);

  const title = '로그인';
  const subtitle = '원하는 방법으로 로그인해 주세요';

  const loginWithKakao = React.useCallback(async () => {
    if (loadingKakao) return;
    setLoadingKakao(true);
    try {
      // TODO: 카카오 로그인 로직
      await new Promise(r => setTimeout(r, 800));
    } catch (e) {
      console.warn('Kakao login failed', e);
    } finally {
      setLoadingKakao(false);
    }
  }, [loadingKakao]);

  const loginWithApple = React.useCallback(async () => {
    if (loadingApple) return;
    setLoadingApple(true);
    try {
      // TODO: 애플 로그인 로직 (expo-apple-authentication / @invertase/react-native-apple-authentication 등)
      await new Promise(r => setTimeout(r, 800));
    } catch (e) {
      console.warn('Apple login failed', e);
    } finally {
      setLoadingApple(false);
    }
  }, [loadingApple]);

  const loginAsAdmin = React.useCallback(async () => {
    if (loadingAdmin) return;
    setLoadingAdmin(true);
    try {
      // TODO: 관리자 로그인 로직
      await new Promise(r => setTimeout(r, 800));
    } catch (e) {
      console.warn('Admin login failed', e);
    } finally {
      setLoadingAdmin(false);
    }
  }, [loadingAdmin]);

  return {
    // 상태
    loadingKakao,
    loadingApple,
    loadingAdmin,
    title,
    subtitle,
    // 액션
    loginWithKakao,
    loginWithApple,
    loginAsAdmin,
  };
}
