import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './style';

import ProfileBlock from './ProfileBlock';
import StatsRow from './StatsRow';
import QuickLinksCard from './QuickLinksCard';
import SecurityCard from './SecurityCard';

export type MyPageProps = {
  isLoggedIn?: boolean;
  nickname?: string;
  level?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  avatarUri?: string;
};

export default function MyPage({
  isLoggedIn = false,
  nickname = '게스트',
  level = 'N5',
  avatarUri,
}: MyPageProps) {
  const Profile = useMemo(
    () => (
      <ProfileBlock
        isLoggedIn={isLoggedIn}
        nickname={nickname}
        level={level}
        avatarUri={avatarUri}
      />
    ),
    [isLoggedIn, nickname, level, avatarUri],
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {Profile}

      {isLoggedIn && <StatsRow />}

      <QuickLinksCard />

      {isLoggedIn && <SecurityCard />}

      <View style={{ height: 28 }} />
    </ScrollView>
  );
}
