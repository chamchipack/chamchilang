import { StyleSheet } from 'react-native';

const BG = '#000';
const CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  row2col: { flexDirection: 'row', gap: 10 },
  statCard: {
    flex: 1,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  statNum: { color: TEXT, fontSize: 18, fontWeight: '800' },
  statLabel: { color: MUTED, fontSize: 12, marginTop: 4 },
});
