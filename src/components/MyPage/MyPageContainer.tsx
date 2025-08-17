// src/components/MyPage/MyPageContainer.tsx
import React from 'react';
import Information from './Contents/Information';

type MyPageContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function MyPageContainer({
  title = 'My Page',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: MyPageContainerProps) {
  return (
    <>
      <Information />
    </>
  );
}
