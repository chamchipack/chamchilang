import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 모달
  modalWrap: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#111214',
    padding: 16,
    gap: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
  modalSub: {
    fontSize: 12,
    color: '#A1A1AA',
  },

  // 컨트롤
  controlRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 2,
  },

  // 리스트
  listBox: {
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#24262B',
    backgroundColor: '#17191D',
    maxHeight: 320,
    overflow: 'hidden',
  },
  loadingBox: {
    padding: 16,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: { color: '#C7CAD1', fontSize: 13 },
  errorText: { color: '#F87171', fontSize: 13, padding: 16 },
  emptyText: {
    color: '#8E8E93',
    fontSize: 13,
    padding: 16,
    textAlign: 'center',
  },

  // 아이템
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  rowActive: {
    backgroundColor: '#1C2433',
  },
  rowLeft: { flex: 1 },
  rowTitle: { color: '#fff', fontSize: 15, fontWeight: '700' },
  rowSub: { color: '#9CA3AF', fontSize: 12, marginTop: 2 },
  checkWrap: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(10,132,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sep: { height: 1, backgroundColor: '#20242C' },

  // 버튼 공용
  btn: {
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnSm: {
    height: 38,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  btnPrimary: {
    backgroundColor: '#0A84FF',
  },
  btnGhost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3F3F46',
  },
  modalRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  btnHalf: { flex: 1 },
});
