import { StyleSheet } from 'react-native';

const BG = '#000'; // 배경
const CARD = '#0E0E10'; // 행 배경(아주 진한 회색)
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BG,
    paddingTop: 8,
  },

  /** Header */
  header: {
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  headerTitle: {
    color: TEXT,
    fontSize: 18,
    fontWeight: '800',
  },
  more: {
    color: ACCENT,
    fontSize: 12,
    fontWeight: '700',
  },

  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    backgroundColor: CARD,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
  },

  /** Thumbnail */
  thumb: {
    width: 72,
    height: 72,
    borderRadius: 10,
    backgroundColor: '#1C1C1E',
  },
  thumbFallback: {
    width: 72,
    height: 72,
    borderRadius: 10,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },

  /** Body */
  body: {
    flex: 1,
  },
  title: {
    color: TEXT,
    fontSize: 15,
    fontWeight: '800',
  },
  excerpt: {
    color: '#C9CCD1',
    fontSize: 12,
    marginTop: 6,
  },
  meta: {
    color: MUTED,
    fontSize: 11,
    marginTop: 6,
  },

  /** Divider between rows */
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: BORDER,
    marginLeft: 16 + 72 + 12, // 썸네일만큼 들여쓰기
  },

  /** Empty */
  empty: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  emptyText: {
    color: MUTED,
    fontSize: 13,
  },
  emptyContent: {
    paddingHorizontal: 16,
  },
});
