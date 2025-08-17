// src/components/CreateWord/CreateWordContainer.tsx
import React from 'react';
import CreateForm from './Contents/CreateForm';

type CreateWordContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function CreateWordContainer({
  title = 'Create Word Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: CreateWordContainerProps) {
  return (
    <>
      <CreateForm />
    </>
  );
}
