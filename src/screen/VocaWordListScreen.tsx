import React from 'react';
import VocaWordListLayout from '../components/VocaWordList/Layout';
import VocaWordListContainer from '../components/VocaWordList/VocaWordListContainer';

export default function VocaWordListScreen() {
  return (
    <VocaWordListLayout>
      <VocaWordListContainer
        title="Search Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </VocaWordListLayout>
  );
}
