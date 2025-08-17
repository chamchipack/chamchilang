import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { marginTop: 20, paddingTop: 10, paddingBottom: 4 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  action: { color: '#8E8E93', fontSize: 12, fontWeight: '600' },
  chipsWrap: { paddingRight: 8 },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#1C1C1E',
    borderWidth: 1,
    borderColor: '#2B2B2E',
    marginRight: 8,
  },
  chipText: { color: '#E5E7EB', fontSize: 13, fontWeight: '500' },
});
