import React from 'react';
import VocaListLayout from '../components/VocaList/Layout';
import VocaListContainer from '../components/VocaList/VocaListContainer';

export default function VocaListScreen() {
  return (
    <VocaListLayout>
      <VocaListContainer
        title="Search Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </VocaListLayout>
  );
}
