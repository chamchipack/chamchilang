import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { categoryState } from '../../../recoil/state/category';

// 필요한 경우 실제 네비게이션 타입으로 교체하세요.
type Navigation = ReturnType<typeof useNavigation>;

type UseCategoryParams = {
  type: string;
  isListPage: boolean;
};

const categories = [
  {
    id: 'all',
    name: '전체',
    image: require('../../../../../images/categories/all.png'),
  },
  {
    id: 'verb',
    name: '동사',
    image: require('../../../../../images/categories/verb.png'),
  },
  {
    id: 'adj',
    name: '형용사',
    image: require('../../../../../images/categories/adj.png'),
  },
  {
    id: 'noun',
    name: '명사',
    image: require('../../../../../images/categories/noun.png'),
  },
  {
    id: 'adv',
    name: '부사',
    image: require('../../../../../images/categories/adv.png'),
  },
  {
    id: 'etc',
    name: '기타',
    image: require('../../../../../images/categories/etc.png'),
  },
];

export function useCategory({ type, isListPage }: UseCategoryParams) {
  const navigation = useNavigation<Navigation>();
  const [category, setCategory] = useState(type);
  //   const [, setCategoryState] = useRecoilState(categoryState);

  const handlePress = (id: string) => {
    setCategory(id);
    // setCategoryState(id);
    if (!isListPage) {
      // WordList 라우트로 이동 (파라미터는 기존과 동일)
      //   navigation.navigate('WordList' as never, { type: id } as never);
    }
  };

  return {
    categories,
    category,
    handlePress,
  };
}
