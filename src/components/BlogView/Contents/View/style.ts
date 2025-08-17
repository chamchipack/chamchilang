import { StyleSheet } from 'react-native';

const BG = '#000000';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const BORDER = '#2B2B2E';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: TEXT,
    marginBottom: 8,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  author: {
    fontSize: 13,
    color: MUTED,
  },
  date: {
    fontSize: 13,
    color: MUTED,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: BORDER,
  },
  body: {
    gap: 14,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: TEXT,
  },
});
