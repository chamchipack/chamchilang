import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import React from 'react';

const SectionTitle = ({
  title,
  action,
}: {
  title: string;
  action?: string;
}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {!!action && (
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.sectionAction}>{action}</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default React.memo(SectionTitle);
