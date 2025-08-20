import React from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native';
import { styles } from './style';
import NavigationBar from '../../../navigation/NavigationBar';

interface SketchBookLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export default function SketchBookLayout({
  children,
  ...scrollProps
}: SketchBookLayoutProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
