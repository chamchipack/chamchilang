import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { User, LogIn, LogOut } from 'lucide-react-native';
import { styles } from './style';

export default function ProfileBlock({
  isLoggedIn,
  nickname,
  level,
  avatarUri,
}: {
  isLoggedIn?: boolean;
  nickname?: string;
  level?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  avatarUri?: string;
}) {
  if (!isLoggedIn) {
    return (
      <View style={styles.card}>
        <View style={styles.rowCenter}>
          <View style={styles.avatarWrap}>
            <User size={28} color="#C9CCD1" />
          </View>
          <View style={styles.flex1}>
            <Text style={styles.title}>로그인이 필요합니다</Text>
            <Text style={styles.sub}>
              저장한 단어와 학습 히스토리를 확인해보세요
            </Text>
          </View>
          <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
            <LogIn size={18} color="#fff" />
            <Text style={styles.primaryBtnText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.rowCenter}>
        {avatarUri ? (
          <Image source={{ uri: avatarUri }} style={styles.avatarImg} />
        ) : (
          <View style={styles.avatarWrap}>
            <User size={28} color="#C9CCD1" />
          </View>
        )}
        <View style={styles.flex1}>
          <Text style={styles.nickname}>{nickname}</Text>
          <View style={styles.badgeRow}>
            <View style={[styles.badge, styles.badgeAccent]}>
              <Text style={styles.badgeAccentText}>JLPT {level}</Text>
            </View>
            <View style={[styles.badge, styles.badgeMuted]}>
              <Text style={styles.badgeMutedText}>학습 124일차</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ghostBtn} activeOpacity={0.8}>
          <LogOut size={18} color="#E5E7EB" />
          <Text style={styles.ghostBtnText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
