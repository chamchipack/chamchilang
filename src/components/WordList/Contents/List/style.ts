import { StyleSheet } from 'react-native';

const BG = '#000000';
const CARD = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BG,
    marginTop: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },

  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerTitle: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '700',
    maxWidth: '80%',
  },
  headerCount: {
    color: MUTED,
    fontSize: 12,
    fontWeight: '600',
  },

  /** List */
  listContainer: {
    paddingVertical: 6,
  },
  emptyContainer: {
    paddingVertical: 40,
  },
  separator: {
    height: 8,
  },

  /** Item */
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  left: {
    width: 96,
    marginRight: 10,
  },
  word: {
    color: TEXT,
    fontSize: 18,
    fontWeight: '800',
  },
  reading: {
    marginTop: 2,
    color: MUTED,
    fontSize: 12,
    fontWeight: '600',
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
  },
  meaning: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '600',
  },
  badges: {
    flexDirection: 'row',
    marginTop: 6,
    gap: 6,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: '#242426',
    borderWidth: 1,
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

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
  },

  /** Empty */
  empty: {
    alignItems: 'center',
    gap: 6,
  },
  emptyTitle: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '700',
  },
  emptySub: {
    color: MUTED,
    fontSize: 12,
  },
});
