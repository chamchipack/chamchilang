import React from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native';
import { styles } from './style';

interface LoginLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export default function LoginLayout({
  children,
  ...scrollProps
}: LoginLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        {...scrollProps}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
