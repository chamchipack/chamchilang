import { StyleSheet } from 'react-native';

const BG = '#000';
const CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';
const OK = '#22C55E';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
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
  headerTexts: { gap: 2 },
  title: { color: TEXT, fontSize: 18, fontWeight: '800' },
  sub: { color: MUTED, fontSize: 12 },

  headerActions: { flexDirection: 'row', gap: 8 },
  toggleAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: ACCENT,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  toggleAllText: { color: '#fff', fontSize: 12, fontWeight: '800' },

  /** Row Card */
  card: {
    flexDirection: 'row',
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 10,
    gap: 10,
  },
  memBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  body: { flex: 1 },
  rowTop: { flexDirection: 'row', alignItems: 'center' },

  wordWrap: { flex: 1 },
  word: { color: TEXT, fontSize: 16, fontWeight: '800' },
  reading: { color: MUTED, fontSize: 12, marginTop: 2 },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 8,
  },
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: BORDER,
  },

  meaningBox: {
    marginTop: 8,
    backgroundColor: '#19191B',
    borderWidth: 1,
    borderColor: '#232327',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minHeight: 38,
    justifyContent: 'center',
  },
  meaningText: { color: TEXT, fontSize: 14, fontWeight: '600' },
  meaningHidden: { backgroundColor: '#141416', borderColor: '#202024' },
  hiddenText: { color: '#6B7280', letterSpacing: 2 },
});
