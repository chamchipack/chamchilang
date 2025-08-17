// src/screen/MyPageScreen.tsx
import React from 'react';
import MyPageLayout from '../components/MyPage/Layout';
import MyPageContainer from '../components/MyPage/MyPageContainer';

export default function MyPageScreen() {
  return (
    <MyPageLayout>
      <MyPageContainer
        title="My Page"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </MyPageLayout>
  );
}
