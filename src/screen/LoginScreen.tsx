// src/screen/LoginScreen.tsx
import React from 'react';
import LoginLayout from '../components/Login/Layout';
import LoginContainer from '../components/Login/LoginContainer';

export default function LoginScreen() {
  return (
    <LoginLayout>
      <LoginContainer
        title="Login"
        subtitle="여기에 원하는 내용을 길게 넣으면 스크롤이 가능합니다."
        itemsCount={20}
      />
    </LoginLayout>
  );
}
