import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

type Options = {
  /** 이동할 라우트 이름 (기본: 'bloglist') */
  routeName?: string;
  /** 이동 모드: 'navigate' | 'reset' | 'replace' (기본: 'navigate') */
  mode?: 'navigate' | 'reset' | 'replace';
  /** 라우트 파라미터 */
  params?: Record<string, any>;
};

export default function useNavigateToBlogList(options: Options = {}) {
  const { routeName = 'bloglist', mode = 'navigate', params } = options;

  const navigation: any = useNavigation();

  return () => {
    if (!navigation) return;

    if (mode === 'reset') {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName as never, params: params as never }],
        }),
      );
      return;
    }

    if (mode === 'replace') {
      navigation.dispatch(
        StackActions.replace(routeName as never, params as never),
      );
      return;
    }

    // default: navigate
    navigation.navigate(routeName as never, params as never);
  };
}
