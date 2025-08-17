import React from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native';
import { styles } from './style';
import NavigationBar from '../../../navigation/NavigationBar';

interface BlogListLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export default function BlogListLayout({
  children,
  ...scrollProps
}: BlogListLayoutProps) {
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
