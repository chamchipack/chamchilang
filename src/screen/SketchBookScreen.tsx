// screens/SketchBookScreen.tsx
import React from 'react';
import SketchBookLayout from '../components/SketchBook/Layout';
import SketchBookContainer from '../components/SketchBook/SketchBookContainer';

export default function SketchBookScreen() {
  return (
    <SketchBookLayout>
      <SketchBookContainer
        title="Search Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </SketchBookLayout>
  );
}
