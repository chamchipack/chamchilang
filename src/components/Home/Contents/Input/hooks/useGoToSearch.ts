import { useNavigation, CommonActions } from '@react-navigation/native';

export default function useGoToSearch() {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'search' }], // 스택 초기화 + search 이동
      }),
    );
  };

  return goToSearch;
}
