import React from 'react';
import { StyleSheet } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './StackNavigator';
import NavigationBar from './NavigationBar';

export default function MainNavigator() {
  const navigationRef = useNavigationContainerRef(); // ✅ 네비게이션 참조 생성

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
        <NavigationBar navigationRef={navigationRef} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
