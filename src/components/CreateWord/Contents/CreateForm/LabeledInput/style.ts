import { StyleSheet } from 'react-native';

const BORDER = '#2B2B2E'; // 경계
const TEXT = '#fff';

export const styles = StyleSheet.create({
  label: {
    color: '#E5E7EB',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  input: {
    color: TEXT,
    backgroundColor: '#0E0E10',
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 14,
  },
});
