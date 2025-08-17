// CreateForm/index.tsx
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import { styles, CHIP_STATES } from './style';
import {
  kanaToRomajiFull,
  splitIntoMora,
  computeMetaRomajiFromKana,
  // kanaToRomajiByTable, // 필요시 사용
} from './hooks/useKanaRomaji';

type Pos = 'verb' | 'noun' | 'adj' | 'adv';

type VerbMeta = {
  form: 1 | 2 | 3; // 1: 오단(五段), 2: 1단(一段), 3: 불규칙
  stem: { jp: string; ro?: string };
  ending: { jp: string; ro?: string };
  exception?: boolean;
};

type SenseInput = {
  meaning: string;
  notes?: string;
  tags?: string[]; // UI에서 콤마(,)로 구분 입력
};

type JLPT = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

const POS_OPTIONS: { key: Pos; label: string }[] = [
  { key: 'verb', label: '동사' },
  { key: 'noun', label: '명사' },
  { key: 'adj', label: '형용사' },
  { key: 'adv', label: '부사' },
];

const JLPT_OPTIONS: JLPT[] = ['N1', 'N2', 'N3', 'N4', 'N5'];

/** 루마지 자동화까지는 생략. 필요 시 IME/변환 훅으로 확장 */
export default function CreateWord() {
  const [pos, setPos] = useState<Pos>('verb');

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
function VerbForm() {
  // 기본정보
  const [jp, setJp] = useState(''); // 일본어 표기(漢字)
  const [kana, setKana] = useState(''); // 히라가나
  const [ro, setRo] = useState(''); // ← 자동 변환될 로마자
  const [exception, setException] = useState(false);
  const [jlpt, setJlpt] = useState<JLPT>('N5');

  // 변형 정보(어간/어미/활용형)
  const [form, setForm] = useState<1 | 2 | 3>(2); // 기본 1단(=2)
  const [stemJp, setStemJp] = useState('');
  const [endingJp, setEndingJp] = useState('');

  // senses
  const [senses, setSenses] = useState<SenseInput[]>([
    { meaning: '', notes: '', tags: [] },
  ]);

  React.useEffect(() => {
    if (!jp) {
      setStemJp('');
      setEndingJp('');
      return;
    }
    if (jp.length === 1) {
      setStemJp('');
      setEndingJp(jp);
      return;
    }
    setStemJp(jp.slice(0, -1));
    setEndingJp(jp.slice(-1));
  }, [jp]);

  // kana → 전체 ro 자동 변환
  React.useEffect(() => {
    if (!kana.trim()) {
      setRo('');
      return;
    }
    try {
      setRo(kanaToRomajiFull(kana));
    } catch {
      setRo('');
    }
  }, [kana]);

  const canSubmit = useMemo(() => {
    return (
      jp.trim().length > 0 &&
      kana.trim().length > 0 &&
      stemJp.trim().length > 0 &&
      endingJp.trim().length > 0
    );
  }, [jp, kana, stemJp, endingJp]);

  const addSense = () =>
    setSenses(prev => [...prev, { meaning: '', notes: '', tags: [] }]);

  const removeSense = (idx: number) =>
    setSenses(prev => prev.filter((_, i) => i !== idx));

  const updateSense = (
    idx: number,
    field: keyof SenseInput | 'tagsText',
    value: string,
  ) => {
    setSenses(prev => {
      const next = [...prev];
      const target = { ...next[idx] };
      if (field === 'tagsText') {
        target.tags = value
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
      } else {
        (target as any)[field] = value;
      }
      next[idx] = target;
      return next;
    });
  };

  const submit = () => {
    if (!canSubmit) {
      Alert.alert(
        '입력 확인',
        '기본 정보(일본어/히라가나/어간/어미)를 입력해 주세요.',
      );
      return;
    }
    const { stemRo, endingRo } = computeMetaRomajiFromKana(kana);
    const payload = {
      type: 'verb' as const,
      language: 'japanese' as const,
      jp,
      kana,
      ro, // 전체 로마자(자동)
      exception,
      jlpt,
      meta: {
        form,
        stem: { jp: stemJp, ro: stemRo },
        ending: { jp: endingJp, ro: endingRo },
      } as VerbMeta,
      senses,
    };
    console.log('CREATE VERB PAYLOAD =>', payload);
    Alert.alert('완료', '콘솔에 payload가 출력되었습니다.');
  };

  return (
    <>
      {/* 기본 정보 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>기본 정보(동사)</Text>

        <View style={styles.card}>
          <LabeledInput
            label="일본어 (漢字)"
            value={jp}
            onChangeText={setJp}
            placeholder="예) 流れる"
          />
          <LabeledInput
            label="히라가나 (かな)"
            value={kana}
            onChangeText={setKana}
            placeholder="예) ながれる"
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 4 }}>
                로마자 (자동)
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
                {ro || '—'}
              </Text>
            </View>

            <View style={styles.rowBetween}>
              <Text style={styles.label}>예외동사 여부</Text>
              <Switch
                value={exception}
                onValueChange={setException}
                thumbColor={exception ? '#0A84FF' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#0A84FF55' }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* 활용 정보 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>활용 정보</Text>
        <View style={styles.card}>
          <Text style={styles.label}>활용형(五段/一段/불규칙)</Text>
          <View style={styles.rowWrap}>
            {[1, 2, 3].map(n => {
              const active = form === n;
              const label =
                n === 1 ? '五段(1)' : n === 2 ? '一段(2)' : '不規則(3)';
              return (
                <TouchableOpacity
                  key={n}
                  activeOpacity={0.85}
                  onPress={() => setForm(n as 1 | 2 | 3)}
                  style={[
                    styles.chip,
                    active ? CHIP_STATES.active : CHIP_STATES.idle,
                  ]}>
                  <Text
                    style={[styles.chipText, active && styles.chipTextActive]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View
            style={{
              marginTop: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.label}>어간 (stem, JP)</Text>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
                {stemJp || '—'}
              </Text>
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.label}>어미 (ending, JP)</Text>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
                {endingJp || '—'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* JLPT */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>JLPT 등급</Text>
        <View style={styles.rowWrap}>
          {JLPT_OPTIONS.map(l => {
            const active = jlpt === l;
            return (
              <TouchableOpacity
                key={l}
                activeOpacity={0.85}
                onPress={() => setJlpt(l)}
                style={[
                  styles.chip,
                  active ? CHIP_STATES.active : CHIP_STATES.idle,
                ]}>
                <Text
                  style={[styles.chipText, active && styles.chipTextActive]}>
                  {l}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Senses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Senses (의미/메모/태그)</Text>

        {senses.map((s, i) => (
          <View key={`sense-${i}`} style={styles.card}>
            <LabeledInput
              label={`의미 ${i + 1}`}
              value={s.meaning}
              onChangeText={v => updateSense(i, 'meaning', v)}
              placeholder="예) 흐르다"
            />
            <LabeledInput
              label="메모"
              value={s.notes ?? ''}
              onChangeText={v => updateSense(i, 'notes', v)}
              placeholder="예) 물이 흐르다 등"
              multiline
            />
            <LabeledInput
              label="태그(콤마로 구분)"
              value={(s.tags ?? []).join(', ')}
              onChangeText={v => updateSense(i, 'tagsText', v)}
              placeholder="예) 일상, 기초"
            />

            <View style={styles.rowRight}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => removeSense(i)}
                style={[styles.smallBtn, styles.btnDanger]}>
                <Text style={styles.smallBtnText}>삭제</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={addSense}
          style={[styles.btn, styles.btnGhost]}>
          <Text style={styles.btnText}>+ 의미 추가</Text>
        </TouchableOpacity>
      </View>

      {/* 제출 */}
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={submit}
        style={[styles.btn, styles.btnPrimary]}>
        <Text style={styles.btnText}>단어 등록</Text>
      </TouchableOpacity>
    </>
  );
}

/** 공용 라벨+인풋 */
function LabeledInput({
  label,
  ...rest
}: { label: string } & React.ComponentProps<typeof TextInput>) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor="#8E8E93"
      />
    </View>
  );
}
