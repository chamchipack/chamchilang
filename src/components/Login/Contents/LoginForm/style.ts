import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 16,
  },

  // Header
  header: {
    gap: 6,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1AA',
  },

  // Buttons (base)
  btn: {
    height: 52,
    borderRadius: 14,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  // Kakao
  kakaoBtn: {
    backgroundColor: '#FEE500', // Kakao Yellow
    shadowColor: '#FEE500',
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  kakaoMark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kakaoMarkText: {
    color: '#FEE500',
    fontSize: 14,
    fontWeight: '800',
  },
  kakaoText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },

  // Divider
  dividerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 6,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#2A2A2E',
  },
  dividerText: {
    color: '#808089',
    fontSize: 12,
  },

  // Admin
  adminBtn: {
    backgroundColor: '#1F2937', // slate-800
    borderWidth: 1,
    borderColor: '#2A2F38',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  adminIconWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#111827', // gray-900
    alignItems: 'center',
    justifyContent: 'center',
  },
  adminText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // Apple
  appleBtn: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#1F1F1F',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  appleIconWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // Helper
  helper: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 6,
  },

  // ---- Modal ----
  modalWrap: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#111214',
    padding: 18,
    gap: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
  modalSub: {
    fontSize: 13,
    color: '#A1A1AA',
  },
  modalInput: {
    marginTop: 8,
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: '#181A1F',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#2A2F38',
  },
  modalError: {
    marginTop: 6,
    color: '#F87171',
    fontSize: 12,
  },
  modalRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  btnHalf: {
    flex: 1,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },

  btnPrimary: {
    backgroundColor: '#0A84FF', // iOS 블루 톤
  },

  btnGhost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3F3F46',
  },
});
