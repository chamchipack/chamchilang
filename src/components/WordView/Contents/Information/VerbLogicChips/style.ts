import { StyleSheet } from 'react-native';

const BG = '#000';
const SURFACE = '#1C1C1E';
const BORDER = '#2B2B2E';
const TEXT = '#FFFFFF';
const MUTED = '#8E8E93';
const ACCENT = '#0A84FF';

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  row: {
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#19191B',
    borderWidth: 1,
    borderColor: BORDER,
  },
  chipActive: {
    backgroundColor: 'rgba(10,132,255,0.15)',
    borderColor: 'rgba(10,132,255,0.35)',
  },
  chipText: {
    color: '#C9CCD1',
    fontSize: 12,
    fontWeight: '700',
  },
  chipTextActive: {
    color: ACCENT,
  },
  divider: {
    height: 10,
  },
  resultBox: {
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
  },
  resultLabel: {
    color: MUTED,
    fontSize: 12,
    marginBottom: 2,
  },
  resultMain: {
    color: TEXT,
    fontSize: 20,
    fontWeight: '800',
  },
  resultSub: {
    color: '#C9CCD1',
    fontSize: 12,
    marginTop: 2,
  },
  meta: {
    color: MUTED,
    fontSize: 12,
    marginTop: 2,
  },
});
