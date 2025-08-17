import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Lock, Apple } from 'lucide-react-native';
import { styles } from './style';
import useLoginForm from './hooks/useLoginForm';
import useAdminPassword from './hooks/useAdminPassword';
import AdminPasswordModal from './AdminPasswordModal';

export default function LoginForm() {
  const {
    loadingKakao,
    loadingApple,
    loadingAdmin,
    title,
    subtitle,
    loginWithKakao,
    loginWithApple,
    loginAsAdmin, // 실제 관리자 인증 (훅 내부 TODO에 구현)
  } = useLoginForm();

  // 비밀번호 모달 훅: 숫자패드 & 4자리 이상 예시
  const adminPass = useAdminPassword({
    numeric: false, // 숫자패드를 원하면 true로
    minLength: 4,
    validate: async pw => {
      // 여기서 1차 로컬 검증(예: 하드코딩/환경변수) 또는
      // 서버 API 호출로 true/false를 리턴하세요.
      // 데모: "admin1234"만 통과
      return pw === 'admin1234';
    },
  });

  const onAdminPress = () => {
    // 버튼 누르면 모달 오픈
    adminPass.open();
  };

  const onAdminSubmit = async () => {
    // 모달 내 "확인" 눌렀을 때: 검증 먼저
    await adminPass.submit();
    if (!adminPass.visible && !adminPass.error) {
      // 검증 성공 시 실제 관리자 로그인 로직 호출
      await loginAsAdmin();
    }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {/* 카카오 */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.btn, styles.kakaoBtn]}
        onPress={loginWithKakao}
        disabled={loadingKakao}>
        <View style={styles.kakaoMark}>
          <Text style={styles.kakaoMarkText}>K</Text>
        </View>
        {loadingKakao ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Text style={styles.kakaoText}>카카오로 계속하기</Text>
        )}
      </TouchableOpacity>

      {/* 애플 */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.btn, styles.appleBtn]}
        onPress={loginWithApple}
        disabled={loadingApple}>
        <View style={styles.appleIconWrap}>
          <Apple size={18} color="#fff" />
        </View>
        {loadingApple ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.appleText}>Apple로 계속하기</Text>
        )}
      </TouchableOpacity>

      {/* 구분선 */}
      <View style={styles.dividerWrap}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>또는</Text>
        <View style={styles.divider} />
      </View>

      {/* 관리자 로그인 → 비밀번호 모달 */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.btn, styles.adminBtn]}
        onPress={onAdminPress}
        disabled={loadingAdmin}>
        <View style={styles.adminIconWrap}>
          <Lock size={18} color="#E5E7EB" />
        </View>
        {loadingAdmin ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.adminText}>관리자 로그인</Text>
        )}
      </TouchableOpacity>

      <AdminPasswordModal
        visible={adminPass.visible}
        loading={loadingAdmin || adminPass.loading} // 필요시 통합 로딩
        error={adminPass.error ?? undefined}
        password={adminPass.password}
        numeric={adminPass.numeric}
        onChangePassword={adminPass.setPassword}
        onClose={adminPass.close}
        onSubmit={onAdminSubmit}
      />

      {/* 안내 */}
      <Text style={styles.helper}>
        로그인 시 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
      </Text>
    </View>
  );
}
