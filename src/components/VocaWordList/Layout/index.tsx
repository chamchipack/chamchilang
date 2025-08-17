import React from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native';
import { styles } from './style';
import NavigationBar from '../../../navigation/NavigationBar';

interface VocaWordListLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export default function VocaWordListLayout({
  children,
  ...scrollProps
}: VocaWordListLayoutProps) {
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
