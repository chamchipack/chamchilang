// CreateForm/index.tsx
import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles, CHIP_STATES } from './style';
import { PartOfSpeech } from '../../../../config/type/language/atoms';
import VerbForm from './VerbForm';
import AdjectiveForm from './AdjectiveForm';

const POS_OPTIONS: { key: PartOfSpeech; label: string }[] = [
  { key: 'verb', label: '동사' },
  { key: 'noun', label: '명사' },
  { key: 'adj', label: '형용사' },
  { key: 'adv', label: '부사' },
];

/** 루마지 자동화까지는 생략. 필요 시 IME/변환 훅으로 확장 */
export default function CreateWord() {
  const [pos, setPos] = useState<PartOfSpeech>('verb');

  const PosSelector = (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>품사 선택</Text>
      <View style={styles.rowWrap}>
        {POS_OPTIONS.map(({ key, label }) => {
          const active = pos === key;
          return (
            <TouchableOpacity
              key={key}
              activeOpacity={0.85}
              onPress={() => setPos(key)}
              style={[
                styles.chip,
                active ? CHIP_STATES.active : CHIP_STATES.idle,
              ]}>
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {label} <Text style={styles.chipMeta}>({key})</Text>
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {PosSelector}

      {pos === 'verb' ? (
        <VerbForm />
      ) : pos === 'adj' ? (
        <AdjectiveForm />
      ) : (
        <View style={styles.card}>
          <Text style={styles.muted}>
            현재는 동사 입력 폼만 연결되어 있어요. 선택하신 품사(
            <Text style={styles.accent}>{pos}</Text>)에 맞는 폼을 같은 패턴으로
            추가해 주세요.
          </Text>
        </View>
      )}

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

/** --------------------------
 * 동사 입력 폼
 * -------------------------- */
