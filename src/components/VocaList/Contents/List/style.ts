import { StyleSheet } from 'react-native';

const BG = '#000';
const CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    paddingHorizontal: 0,
    paddingTop: 12,
  },
  listContent: { paddingBottom: 16 },
  sep: { height: 10 },

  /** Header */
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { color: TEXT, fontSize: 18, fontWeight: '800' },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: ACCENT,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  createText: { color: '#fff', fontSize: 12, fontWeight: '800' },

  /** Card */
  card: {
    borderRadius: 12,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  colorBar: { width: 6 },

  body: { flex: 1, paddingHorizontal: 12, paddingVertical: 10, gap: 6 },
  rowTop: { flexDirection: 'row', alignItems: 'center' },
  title: { flex: 1, color: TEXT, fontSize: 15, fontWeight: '800' },
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: BORDER,
    marginLeft: 8,
  },
  meta: { color: MUTED, fontSize: 12 },

  /** Progress */
  progressWrap: {
    height: 8,
    position: 'relative',
    marginTop: 4,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#232327',
  },
  progressFg: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: ACCENT,
  },
});
