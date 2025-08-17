import { StyleSheet } from 'react-native';

const BG = '#000';
const CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  /** 공통 카드 */
  card: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 12,
    gap: 10,
  },

  /** 프로필 */
  rowCenter: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#19191B',
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#26262A',
  },
  title: { color: TEXT, fontSize: 16, fontWeight: '800' },
  sub: { color: MUTED, fontSize: 12, marginTop: 2 },
  nickname: { color: TEXT, fontSize: 18, fontWeight: '800' },

  /** 배지 */
  badgeRow: { flexDirection: 'row', gap: 8, marginTop: 6 },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  badgeAccent: {
    backgroundColor: 'rgba(10,132,255,0.15)',
    borderColor: 'rgba(10,132,255,0.35)',
  },
  badgeAccentText: { color: ACCENT, fontSize: 11, fontWeight: '800' },
  badgeMuted: { backgroundColor: '#19191B', borderColor: '#232327' },
  badgeMutedText: { color: '#A5A7AD', fontSize: 11, fontWeight: '700' },

  /** 버튼 */
  primaryBtn: {
    height: 36,
    paddingHorizontal: 12,
    backgroundColor: ACCENT,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  primaryBtnText: { color: '#fff', fontSize: 13, fontWeight: '800' },
  ghostBtn: {
    height: 36,
    paddingHorizontal: 10,
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  ghostBtnText: { color: '#E5E7EB', fontSize: 13, fontWeight: '700' },

  flex1: { flex: 1 },
});
