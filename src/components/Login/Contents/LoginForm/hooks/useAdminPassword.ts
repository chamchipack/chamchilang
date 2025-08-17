import * as React from 'react';

type Options = {
  /** 숫자만 받을지 여부 (키패드를 number-pad로) */
  numeric?: boolean;
  /** 최소 길이(예: 4자리 핀) */
  minLength?: number;
  /** 실제 검증 함수: 서버 검증/로컬 비교 등 */
  validate?: (password: string) => Promise<boolean> | boolean;
};

export default function useAdminPassword(opts: Options = {}) {
  const { numeric = false, minLength = 0, validate } = opts;

  const [visible, setVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const open = React.useCallback(() => {
    setPassword('');
    setError(null);
    setVisible(true);
  }, []);

  const close = React.useCallback(() => {
    setVisible(false);
  }, []);

  const submit = React.useCallback(async () => {
    if (minLength && password.length < minLength) {
      setError(`${minLength}자 이상 입력해 주세요.`);
      return;
    }
    setLoading(true);
    try {
      let ok = true;
      if (validate) {
        const r = await validate(password);
        ok = !!r;
      }
      if (!ok) {
        setError('비밀번호가 올바르지 않습니다.');
        return;
      }
      setVisible(false);
      // 성공 후 후속 동작은 훅을 사용하는 쪽에서 이어가기
    } catch (e) {
      setError('로그인 중 오류가 발생했어요.');
    } finally {
      setLoading(false);
    }
  }, [password, minLength, validate]);

  return {
    // state
    visible,
    password,
    loading,
    error,
    numeric,
    // actions
    open,
    close,
    setPassword,
    submit,
  };
}
