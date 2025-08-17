import React from 'react';
import WordListLayout from '../components/WordList/Layout';
import WordListContainer from '../components/WordList/WordListContainer';

export default function WordListScreen() {
  return (
    <WordListLayout>
      <WordListContainer
        title="Search Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </WordListLayout>
  );
}
