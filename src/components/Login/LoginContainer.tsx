import React from 'react';
import LoginForm from './Contents/LoginForm';

type LoginContainerProps = {
  title?: string;
  subtitle?: string;
  itemsCount?: number;
};

export default function LoginContainer({
  title = 'Login Screen',
  subtitle = '여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다.',
  itemsCount = 20,
}: LoginContainerProps) {
  return (
    <>
      <LoginForm />
    </>
  );
}
