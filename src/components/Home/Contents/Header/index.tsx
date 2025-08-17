import React from 'react';
import { Image, StyleSheet, View, ImageSourcePropType } from 'react-native';
import { styles } from './style';

const logoSource: ImageSourcePropType = require('../../../../images/Logo.png');

export default function HeaderLogo() {
  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} resizeMode="contain" />
    </View>
  );
}
