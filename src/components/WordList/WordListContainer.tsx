import React from 'react';
import List from './Contents/List';
import Input from './Contents/Input';
import Container from './Contents';

type WordListContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function WordListContainer({
  title = 'Search Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: WordListContainerProps) {
  return (
    <>
      <Container />
    </>
  );
}
