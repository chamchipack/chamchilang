import React from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native';
import { styles } from './style';

interface MyPageLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export default function MyPageLayout({
  children,
  ...scrollProps
}: MyPageLayoutProps) {
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
