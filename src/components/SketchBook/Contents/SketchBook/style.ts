// screens/SketchBook/style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex1: { flex: 1 },
  container: {
    flex: 1,
  },

  /** 상단 30% */
  topPane: {
    flex: 3,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: { color: '#E5E7EB', fontSize: 16, fontWeight: '700' },

  /** 우측 액션 영역 */
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  actionGhost: {
    borderColor: '#334155',
    backgroundColor: '#111827',
  },
  actionPrimary: {
    borderColor: '#2563EB',
    backgroundColor: '#2563EB',
  },
  actionBtnText: { color: '#E5E7EB', fontWeight: '700' },

  sentenceBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#1F2937',
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 12,
  },
  placeholder: { color: '#6B7280', fontSize: 13 },
  sentenceText: {
    color: '#F3F4F6',
    fontSize: 18,
    lineHeight: 28,
  },

  /** 섹션 분리선 */
  separator: {
    height: 1,
    backgroundColor: '#111827',
    borderTopWidth: 1,
    borderTopColor: '#1F2937',
    marginHorizontal: 0,
    marginVertical: 20,
  },

  /** 하단 70% */
  bottomPane: {
    flex: 7,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  searchRow: {
    position: 'relative',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#0F172A',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#1F2937',
    borderRadius: 12,
    paddingVertical: 12,
    paddingLeft: 14,
    paddingRight: 64, // 조사 버튼 여백
    fontSize: 14,
  },
  particleBtn: {
    position: 'absolute',
    right: 6,
    top: 6,
    bottom: 6,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  particleBtnText: { color: '#fff', fontWeight: '800' },

  chipRow: {
    gap: 8,
    marginBottom: 8,
  },
  chipRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listContent: {
    paddingBottom: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#111827',
    alignItems: 'center',
  },
  chipText: { color: '#E5E7EB', fontWeight: '600' },

  /** 모달(조사 선택) */
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: '#0B1220',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    maxHeight: '60%',
  },
  modalHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },
  modalClose: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#111827',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#374151',
  },
  modalCloseText: { color: '#E5E7EB', fontWeight: '600' },
  modalContent: {
    padding: 16,
    paddingBottom: 24,
  },
  particleChip: {
    backgroundColor: '#0F172A',
  },
});
