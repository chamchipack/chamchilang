import React from 'react';
import { styles } from './style';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

const Badge = ({
  text,
  tone = 'default',
}: {
  text: string;
  tone?: 'default' | 'accent' | 'muted';
}) => {
  const styleMap = {
    default: [styles.badge, styles.badgeDefault],
    accent: [styles.badge, styles.badgeAccent],
    muted: [styles.badge, styles.badgeMuted],
  } as const;
  const textMap = {
    default: styles.badgeText,
    accent: styles.badgeAccentText,
    muted: styles.badgeMutedText,
  } as const;
  return (
    <View style={styleMap[tone] as unknown as StyleProp<ViewStyle>}>
      <Text style={textMap[tone]}>{text}</Text>
    </View>
  );
};

export default React.memo(Badge);
