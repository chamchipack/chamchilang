import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { verbLogic } from '../../../../../config/japanese/transform/verb';
import { EndingRoSchema } from '../../../../../config/type/language/atoms/index';
import SectionTitle from '../Sectiontitle';
import z from 'zod';

export type EndingRo = z.infer<typeof EndingRoSchema>;

export type VerbMeta = {
  form: 1 | 2 | 3; // 오단/일단/불규칙
  stem: { jp: string; ro: string };
  ending: { jp: string; ro: EndingRo };
};

type InnerVariant = {
  id: string;
  name: string;
  value: {
    '1'?: Record<string, string>;
    '2'?: Record<string, string>;
    '3'?: Record<string, string>;
  };
};

type Group = {
  name: string;
  key: string;
  value: InnerVariant[];
};

type Props = {
  meta: VerbMeta;
  // (옵션) 초기 선택자
  initialGroupKey?: string;
  initialVariantId?: string;
  // (옵션) 선택이 바뀔 때 알림
  onChange?: (payload: {
    groupKey: string;
    groupName: string;
    variantId: string;
    variantName: string;
    suffix: string;
    full: string; // stem.jp + suffix
  }) => void;
};

export default function VerbConjugator({
  meta,
  initialGroupKey,
  initialVariantId,
  onChange,
}: Props) {
  // 1) 바깥(그룹) 선택 상태
  const groups: Group[] = verbLogic as any;

  const initialGroupIndex = useMemo(() => {
    if (!initialGroupKey) return 0;
    const i = groups.findIndex(g => g.key === initialGroupKey);
    return Math.max(0, i);
  }, [groups, initialGroupKey]);

  const [groupIndex, setGroupIndex] = useState(initialGroupIndex);
  const currentGroup = groups[groupIndex];

  // 2) 안쪽(변형) 선택 상태
  const variants: InnerVariant[] = currentGroup?.value ?? [];

  const initialVariantIndex = useMemo(() => {
    if (!initialVariantId) return 0;
    const i = variants.findIndex(v => v.id === initialVariantId);
    return Math.max(0, i);
  }, [variants, initialVariantId]);

  const [variantIndex, setVariantIndex] = useState(initialVariantIndex);
  const currentVariant = variants[variantIndex];

  // 3) suffix 계산
  const { suffix, full } = useMemo(() => {
    const valueMap =
      currentVariant?.value ??
      currentGroup?.value?.[0]?.value ??
      ({} as InnerVariant['value']);

    const formKey = String(meta?.form) as '1' | '2' | '3';
    const formMap = valueMap?.[formKey];

    // 폼이 없거나, 엔딩 키가 없으면 빈 문자열
    const sfx = formMap?.[meta?.ending?.ro] ?? '';
    return {
      suffix: sfx,
      full: `${meta?.stem?.jp ?? ''}${sfx}`,
    };
  }, [currentGroup, currentVariant, meta]);

  // 4) 선택 이벤트 전달
  const emit = (gIdx: number, vIdx: number) => {
    const g = groups[gIdx];
    const v = g?.value?.[vIdx];
    if (!g || !v) return;
    const valueMap = v.value ?? {};
    const formKey = String(meta?.form) as '1' | '2' | '3';
    const formMap = valueMap?.[formKey];
    const sfx = formMap?.[meta?.ending?.ro] ?? '';
    onChange?.({
      groupKey: g.key,
      groupName: g.name,
      variantId: v.id,
      variantName: v.name,
      suffix: sfx,
      full: `${meta?.stem?.jp ?? ''}${sfx}`,
    });
  };

  // 바깥 칩
  const renderGroupChip = ({ item, index }: { item: Group; index: number }) => {
    const active = index === groupIndex;
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => {
          setGroupIndex(index);
          setVariantIndex(0); // 그룹 바꾸면 안쪽 초기화
          emit(index, 0);
        }}
        style={[styles.chip, active && styles.chipActive]}>
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  // 안쪽 칩
  const renderVariantChip = ({
    item,
    index,
  }: {
    item: InnerVariant;
    index: number;
  }) => {
    const active = index === variantIndex;
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => {
          setVariantIndex(index);
          emit(groupIndex, index);
        }}
        style={[styles.chip, active && styles.chipActive]}>
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* 1단: 그룹 칩 */}
      <SectionTitle title="다양한 용법" />

      <FlatList
        horizontal
        data={groups}
        keyExtractor={g => g.key}
        renderItem={renderGroupChip}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      />

      <View style={styles.divider} />

      {/* 2단: 변형 칩 */}
      <FlatList
        horizontal
        data={variants}
        keyExtractor={v => v.id}
        renderItem={renderVariantChip}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      />

      {/* 결과 */}
      {!!suffix && (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>활용 결과</Text>
          <Text style={styles.resultMain}>{full || '—'}</Text>
          {!!suffix && <Text style={styles.resultSub}>suffix: {suffix}</Text>}
          {!!(currentGroup && currentVariant) && (
            <Text style={styles.meta}>
              {currentGroup.name} · {currentVariant.name}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}
