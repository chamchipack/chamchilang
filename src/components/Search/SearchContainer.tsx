import React from 'react';
import Input from './Contents/Input';
import RecentSearches from './Contents/RecentSearches';
import SuggestedSearches from './Contents/SuggestedSearches';

type SearchContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function SearchContainer({
  title = 'Search Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: SearchContainerProps) {
  return (
    <>
      <Input />
      <RecentSearches />
      <SuggestedSearches />
    </>
  );
}
