import React from 'react';
import View from './Contents/View';

type BlogViewContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function BlogViewContainer({
  title = 'Search Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: BlogViewContainerProps) {
  return (
    <>
      <View />
    </>
  );
}
