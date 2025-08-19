import { StyleSheet } from 'react-native';

const BG = '#000'; // 배경
const CARD = '#121214'; // 카드
const BORDER = '#2B2B2E'; // 경계
const TEXT = '#fff';
const MUTED = '#A1A1AA';
const ACCENT = '#0A84FF';

export const CHIP_STATES = {
  idle: {
    backgroundColor: '#1C1C1E',
    borderColor: '#2B2B2E',
  },
  active: {
    backgroundColor: 'rgba(10,132,255,0.15)',
    borderColor: 'rgba(10,132,255,0.35)',
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  content: {
    paddingVertical: 16,
  },

  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: TEXT,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 10,
  },

  card: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 12,
    gap: 10,
  },

  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  rowRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  chip: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  chipText: {
    color: MUTED,
    fontSize: 12,
    fontWeight: '700',
  },
  chipTextActive: {
    color: ACCENT,
  },
  chipMeta: {
    color: MUTED,
    fontSize: 10,
    fontWeight: '700',
  },

  label: {
    color: '#E5E7EB',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  input: {
    color: TEXT,
    backgroundColor: '#0E0E10',
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 14,
  },

  muted: {
    color: MUTED,
    fontSize: 13,
  },
  accent: {
    color: ACCENT,
    fontWeight: '800',
  },

  btn: {
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  btnPrimary: {
    backgroundColor: ACCENT,
    borderColor: ACCENT,
  },
  btnGhost: {
    backgroundColor: 'transparent',
    borderColor: BORDER,
  },
  btnDanger: {
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
  },
  btnText: {
    color: '#fff',
    fontWeight: '800',
  },
  smallBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#1F1212',
    borderColor: '#3b1818',
  },
  smallBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
});
