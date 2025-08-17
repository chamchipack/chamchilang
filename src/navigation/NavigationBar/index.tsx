// src/navigation/NavigationBar/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react-native';
import {
  CommonActions,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { styles, NAVBAR_HEIGHT } from './style';

const TABS = [
  { id: 'home', label: '홈', Icon: Home, route: 'home' },
  { id: 'search', label: '검색', Icon: Search, route: 'search' },
  { id: 'shop', label: '쇼핑', Icon: ShoppingBag, route: 'Shop' },
  { id: 'vocalist', label: '찜', Icon: Heart, route: 'vocalist' },
  { id: 'mypage', label: '프로필', Icon: User, route: 'mypage' },
];

const exception = TABS.map(({ route = '' }) => route);

export default function NavigationBar({
  navigationRef,
}: {
  navigationRef: NavigationContainerRef<any>;
}) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [currentRouteName, setCurrentRouteName] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      if (navigationRef?.getCurrentRoute)
        setCurrentRouteName(navigationRef.getCurrentRoute()?.name ?? '');
    });

    return unsubscribe;
  }, [navigation]);

  if (!exception.includes(currentRouteName)) return null;

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={[styles.bar, { height: NAVBAR_HEIGHT + insets.bottom }]}>
        {TABS.map(({ id, label, Icon, route }) => (
          <TouchableOpacity
            key={id}
            style={styles.tabItem}
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: route }], // 현재 탭으로 스택 초기화
                }),
              )
            }
            activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
              <Icon
                size={22}
                color={currentRouteName === route ? '#fff' : '#8E8E93'}
              />
            </View>
            <Text style={styles.tabLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
