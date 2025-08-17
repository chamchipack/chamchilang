// src/screens/CreateWordScreen.tsx
import React from 'react';
import CreateWordLayout from '../components/CreateWord/Layout';
import CreateWordContainer from '../components/CreateWord/CreateWordContainer';

export default function CreateWordScreen() {
  return (
    <CreateWordLayout>
      <CreateWordContainer
        title="Create Word Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </CreateWordLayout>
  );
}
