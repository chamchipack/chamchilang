import React from 'react';
import BlogListLayout from '../components/BlogList/Layout';
import BlogListContainer from '../components/BlogList/BlogListContainer';

export default function BlogListScreen() {
  return (
    <BlogListLayout>
      <BlogListContainer
        title="Home Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </BlogListLayout>
  );
}
