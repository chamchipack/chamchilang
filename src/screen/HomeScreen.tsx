import React from 'react';
import HomeLayout from '../components/Home/Layout';
import HomeContainer from '../components/Home/HomeContainer';

export default function HomeScreen() {
  return (
    <HomeLayout>
      <HomeContainer
        title="Home Screen"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </HomeLayout>
  );
}
