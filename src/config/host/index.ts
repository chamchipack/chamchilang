import { Platform } from 'react-native';

export const HOST = __DEV__
  ? Platform.OS === 'android'
    ? 'http://10.0.2.2:7650'
    : 'http://localhost:7650'
  : 'http://localhost:7650';
