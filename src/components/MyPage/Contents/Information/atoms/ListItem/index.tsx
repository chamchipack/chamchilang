import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { styles } from './style';

export default function ListItem({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      activeOpacity={0.85}
      onPress={onPress}>
      <View style={styles.listIcon}>{icon}</View>
      <View style={styles.flex1}>
        <Text style={styles.listTitle}>{title}</Text>
        {!!subtitle && <Text style={styles.listSub}>{subtitle}</Text>}
      </View>
      <ChevronRight size={18} color="#8E8E93" />
    </TouchableOpacity>
  );
}
