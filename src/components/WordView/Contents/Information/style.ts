import { StyleSheet } from 'react-native';

const BG = '#000';
const CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';
const WARN = '#FFD166';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BG,
  },

  /** Header */
  headerCard: {
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BORDER,
    backgroundColor: BG,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleWrap: {
    flexShrink: 1,
  },
  word: {
    color: TEXT,
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 32,
  },
  reading: {
    marginTop: 4,
    color: MUTED,
    fontSize: 14,
    fontWeight: '600',
  },
  pronunciation: {
    marginTop: 6,
    color: '#C9CCD1',
    fontSize: 12,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 12,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: '#161618',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },

  /** Badges */
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  badgeDefault: {
    backgroundColor: '#242426',
    borderColor: BORDER,
  },
  badgeText: {
    color: '#C9CCD1',
    fontSize: 11,
    fontWeight: '700',
  },
  badgeAccent: {
    backgroundColor: 'rgba(10,132,255,0.15)',
    borderColor: 'rgba(10,132,255,0.35)',
  },
  badgeAccentText: {
    color: ACCENT,
    fontSize: 11,
    fontWeight: '800',
  },
  badgeMuted: {
    backgroundColor: '#19191B',
    borderColor: '#232327',
  },
  badgeMutedText: {
    color: '#A5A7AD',
    fontSize: 11,
    fontWeight: '700',
  },

  /** Body */
  scroll: { flex: 1 },
  contentContainer: {
    paddingTop: 12,
    paddingBottom: 24,
    gap: 12,
  },

  /** Section */
  sectionHeader: {
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  sectionTitle: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '800',
  },
  sectionAction: {
    color: ACCENT,
    fontSize: 12,
    fontWeight: '700',
  },

  /** Card */
  card: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  /** Senses */
  senseRow: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 8,
  },
  senseDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
  },
  senseIndex: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#19191B',
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  senseIndexText: {
    color: '#C9CCD1',
    fontSize: 12,
    fontWeight: '700',
  },
  senseBody: { flex: 1 },
  meaningText: {
    color: TEXT,
    fontSize: 15,
    fontWeight: '700',
  },
  notes: {
    color: '#C9CCD1',
    fontSize: 12,
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  smallTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: '#242426',
    borderWidth: 1,
    borderColor: BORDER,
  },
  smallTagText: {
    color: '#C9CCD1',
    fontSize: 11,
    fontWeight: '700',
  },

  /** Examples */
  exampleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
  },
  exampleDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
  },
  exampleMain: { flex: 1 },
  exampleJP: {
    color: TEXT,
    fontSize: 20,
    fontWeight: '700',
  },
  exampleReading: {
    marginTop: 2,
    color: '#C9CCD1',
    fontSize: 12,
  },
  exampleKR: {
    marginTop: 4,
    color: MUTED,
    fontSize: 12,
  },
  exampleRO: {
    fontSize: 12,
    color: '#A0A0A0',
    marginTop: 2,
    fontStyle: 'italic', // 기울임
  },

  /** Chips */
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#202022',
    borderWidth: 1,
    borderColor: BORDER,
  },
  chipText: {
    color: TEXT,
    fontSize: 12,
    fontWeight: '700',
  },
  chipMuted: {
    backgroundColor: '#161618',
    borderColor: '#26262A',
  },
  chipMutedText: {
    color: '#B8BBC2',
    fontSize: 12,
    fontWeight: '700',
  },

  /** 2-col */
  row2col: {
    flexDirection: 'row',
    gap: 12,
  },
  col: { flex: 1 },

  /** Bottom actions */
  bottomBar: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
    backgroundColor: BG,
  },
  ctaPrimary: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: ACCENT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaPrimaryText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
  ctaGhost: {
    width: 110,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: '#161618',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaGhostText: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '700',
  },
});
