import { StyleSheet } from 'react-native';

// 다크 UI 기준 색상
const BG_CARD = '#1C1C1E';
const BG_THUMB = '#262628';
const TEXT_PRIMARY = '#FFFFFF';
const TEXT_SECONDARY = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // "인기 글" | "더보기"
    alignItems: 'center',
  },
  headerTitle: {
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '700',
  },
  more: {
    color: ACCENT,
    fontSize: 14,
    fontWeight: '600',
  },
  listContent: {
    paddingLeft: 4,
    paddingRight: 8,
  },
  card: {
    width: 230,
    marginRight: 12,
    backgroundColor: BG_CARD,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbBox: {
    height: 140,
    backgroundColor: BG_THUMB,
  },
  thumb: {
    width: '100%',
    height: '100%',
  },
  thumbPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbPlaceholderText: {
    color: TEXT_SECONDARY,
    fontSize: 12,
  },
  cardTitle: {
    color: TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
