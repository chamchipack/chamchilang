import React from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native';
import { styles } from './style';
import NavigationBar from '../../../navigation/NavigationBar';

interface WordListLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export default function WordListLayout({
  children,
  ...scrollProps
}: WordListLayoutProps) {
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
