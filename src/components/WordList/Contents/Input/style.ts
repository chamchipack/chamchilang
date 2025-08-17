import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /** 상단 라인: 뒤로가기 + 인풋박스 */
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /** 뒤로가기 버튼(인풋 바깥) */
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  /** 인풋 박스 컨테이너 (기존 container) */
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // 흰색 인풋 박스
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  /** 왼쪽 검색 아이콘 (기존 icon) */
  icon: {
    marginRight: 6,
  },

  /** 텍스트 입력 (기존 input) */
  input: {
    flex: 1,
    color: '#111',
    fontSize: 16,
    paddingVertical: 0,
  },
});
