import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 로고와 다른 요소를 가로로 배치할 수 있게
    alignItems: 'center',
    paddingVertical: 8,
  },
  logo: {
    width: 100,
    height: 40,
  },
});
