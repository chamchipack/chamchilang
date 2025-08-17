import React from 'react';
import List from './Contents/List';

type BlogListContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export const MOCK_BLOGS = [
  {
    id: '1',
    title: 'JLPT N3 단어 암기 비법',
    thumbnail: 'https://picsum.photos/200/200?random=1',
    excerpt:
      'JLPT N3 합격을 위해 꼭 알아야 할 핵심 단어들을 효과적으로 외우는 방법을 소개합니다.',
    updatedAt: '2025-08-10',
  },
  {
    id: '2',
    title: '일본 여행에서 자주 쓰는 표현 TOP 10',
    thumbnail: 'https://picsum.photos/200/200?random=2',
    excerpt:
      '여행 중 길 묻기, 음식 주문하기, 쇼핑할 때 유용한 일본어 표현들을 정리했어요.',
    updatedAt: '2025-08-08',
  },
  {
    id: '3',
    title: '일본 회사에서 자주 쓰는 비즈니스 일본어',
    thumbnail: 'https://picsum.photos/200/200?random=3',
    excerpt:
      '회의, 보고, 이메일 등 실제 직장에서 바로 활용할 수 있는 표현 모음집.',
    updatedAt: '2025-08-05',
  },
  {
    id: '4',
    title: '일본 드라마로 일본어 공부하기',
    thumbnail: 'https://picsum.photos/200/200?random=4',
    excerpt:
      '재밌는 드라마를 보면서 자연스럽게 일본어를 익히는 방법과 추천 드라마 리스트!',
    updatedAt: '2025-08-01',
  },
  {
    id: '5',
    title: '초보자를 위한 히라가나/가타카나 학습 가이드',
    // 썸네일 없는 경우 → fallback 아이콘 표시
    excerpt:
      '일본어 기초의 시작은 문자부터! 히라가나와 가타카나를 효율적으로 외우는 팁을 정리했어요.',
    updatedAt: '2025-07-28',
  },
];

export default function BlogListContainer({
  title = 'Search Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: BlogListContainerProps) {
  return (
    <>
      <List data={MOCK_BLOGS} />
    </>
  );
}
