import { StyleSheet } from 'react-native';

const BG_CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  container: { marginTop: 20, paddingTop: 10, paddingBottom: 4 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: { color: TEXT, fontSize: 16, fontWeight: '700' },
  action: { color: ACCENT, fontSize: 12, fontWeight: '600' },
  listContent: { paddingLeft: 0, paddingRight: 8 },
  card: {
    width: 220,
    height: 110,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: BG_CARD,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 12,
    justifyContent: 'center',
  },
  cardBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(10,132,255,0.15)',
  },
  badgeText: { color: ACCENT, fontSize: 10, fontWeight: '700' },
  cardTitle: { color: TEXT, fontSize: 15, fontWeight: '700', marginBottom: 4 },
  cardSubtitle: { color: MUTED, fontSize: 12 },
});
