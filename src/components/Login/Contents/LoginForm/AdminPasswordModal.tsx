import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './style';

type Props = {
  visible: boolean;
  loading: boolean;
  error?: string | null;
  password: string;
  numeric?: boolean;
  onChangePassword: (v: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

export default function AdminPasswordModal({
  visible,
  loading,
  error,
  password,
  numeric,
  onChangePassword,
  onClose,
  onSubmit,
}: Props) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={styles.modalWrap}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>관리자 비밀번호</Text>
          <Text style={styles.modalSub}>
            관리자 전용 영역입니다. 비밀번호를 입력해 주세요.
          </Text>

          <TextInput
            value={password}
            onChangeText={onChangePassword}
            style={styles.modalInput}
            placeholder="비밀번호"
            placeholderTextColor="#8E8E93"
            secureTextEntry
            keyboardType={numeric ? 'number-pad' : 'default'}
            autoFocus
            editable={!loading}
            onSubmitEditing={onSubmit}
          />

          {!!error && <Text style={styles.modalError}>{error}</Text>}

          <View style={styles.modalRow}>
            <TouchableOpacity
              style={[styles.btn, styles.btnGhost, styles.btnHalf]}
              onPress={onClose}
              disabled={loading}
              activeOpacity={0.9}>
              <Text style={styles.btnText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btnPrimary, styles.btnHalf]}
              onPress={onSubmit}
              disabled={loading}
              activeOpacity={0.9}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.btnText}>확인</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
