// src/navigation/NavigationBar/style.ts
import { StyleSheet } from 'react-native';

export const NAVBAR_HEIGHT = 20; // 🔹 기존보다 낮춘 높이

const BG = '#1C1C1E'; // 밝은 배경
const BORDER = '#2B2B30';

export const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: BG,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
    paddingTop: 6, // 🔹 줄임
    paddingBottom: 6, // 🔹 줄임
    backgroundColor: BG,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconWrapper: {
    height: 24, // 🔹 아이콘 영역도 살짝 줄임
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    marginTop: 1, // 🔹 아이콘과 라벨 간격 살짝 축소
    fontSize: 11,
    color: '#8E8E93',
    fontWeight: '500',
  },
});
