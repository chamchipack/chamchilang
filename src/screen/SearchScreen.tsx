import React from 'react';
import SearchLayout from '../components/Search/Layout';
import SearchContainer from '../components/Search/SearchContainer';

export default function SearchScreen() {
  return (
    <SearchLayout>
      <SearchContainer
        title="Search Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </SearchLayout>
  );
}
