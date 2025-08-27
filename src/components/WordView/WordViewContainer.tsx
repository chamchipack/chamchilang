import React from 'react';
import Information from './Contents/Information';
import { useRoute } from '@react-navigation/native';
import { useWord } from './hooks/useWord';

type WordViewContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function WordViewContainer({
  title = 'Search Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: WordViewContainerProps) {
  const route = useRoute();
  const { wordId = '' } = route.params as { wordId?: string };

  const { data, isLoading, isError, refetch } = useWord({
    wordId: wordId,
  });

  if (!data) return null;

  return (
    <>
      <Information data={data} />
    </>
  );
}
