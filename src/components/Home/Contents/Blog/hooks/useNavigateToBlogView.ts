import { useNavigation } from '@react-navigation/native';

type Options = {
  /** 이동할 라우트 이름 (스택에 등록된 이름) */
  routeName?: string; // 기본: 'blogview'
  /** 라우트로 전달할 파라미터 키 이름 (id를 어떤 키로 넘길지) */
  idParamKey?: string; // 기본: 'id'
};

export default function useNavigateToBlogView(options: Options = {}) {
  const { routeName = 'blogview', idParamKey = 'id' } = options;

  const navigation: any = useNavigation();

  return (post: { id: string; [k: string]: any }) => {
    if (!navigation) return;
    navigation.navigate(
      routeName as never,
      { [idParamKey]: post.id, post } as never,
    );
  };
}
