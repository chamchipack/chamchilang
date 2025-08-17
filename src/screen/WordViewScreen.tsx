import React from 'react';
import WordViewLayout from '../components/WordView/Layout';
import WordViewContainer from '../components/WordView/WordViewContainer';

export default function WordViewScreen() {
  return (
    <WordViewLayout>
      <WordViewContainer
        title="Search Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </WordViewLayout>
  );
}
