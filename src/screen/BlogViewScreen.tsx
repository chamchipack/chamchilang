import React from 'react';
import BlogViewLayout from '../components/BlogView/Layout';
import BlogViewContainer from '../components/BlogView/BlogViewContainer';

export default function HomeScreen() {
  return (
    <BlogViewLayout>
      <BlogViewContainer
        title="Home Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </BlogViewLayout>
  );
}
