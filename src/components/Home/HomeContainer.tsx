import React from 'react';
import HeaderLogo from './Contents/Header';
import Input from './Contents/Input';
import Category from './Contents/Category';
import Blog from './Contents/Blog';

type HomeContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function HomeContainer({
  title = 'Home Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: HomeContainerProps) {
  return (
    <>
      <HeaderLogo />
      <Input />
      <Category />
      <Blog />
    </>
  );
}
