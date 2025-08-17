import { StyleSheet } from 'react-native';

const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  listIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: { color: TEXT, fontSize: 14, fontWeight: '700' },
  listSub: { color: MUTED, fontSize: 12, marginTop: 2 },
  flex1: { flex: 1 },
});
