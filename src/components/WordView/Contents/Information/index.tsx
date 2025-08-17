import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Bookmark, Share2, Volume2, ChevronRight } from 'lucide-react-native';
import SectionTitle from './Sectiontitle';
import Badge from './Badge';
import VerbLogicChips from './VerbLogicChips';
import {
  nagareru,
  atsui,
  AdjWord,
  VerbWord,
  Word,
} from '../../../../config/type/language';
import AdjectiveLogicChips from './AdjectiveLogicChips';

export default function Information({ data = atsui }: { data?: Word }) {
  return (
    <View style={styles.root}>
      {/* 상단 헤더 카드 */}

      <View style={styles.headerCard}>
        <View style={styles.headerRow}>
          <View style={styles.titleWrap}>
            <Text style={styles.word}>{data.jp}</Text>
            {!!data.kana && <Text style={styles.reading}>{data.kana}</Text>}
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <Volume2 size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <Share2 size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <Bookmark size={20} color={false ? '#FFD166' : '#fff'} />
            </TouchableOpacity>
          </View>
        </View>

        {!!data.ro && <Text style={styles.pronunciation}>{data.ro}</Text>}

        <View style={styles.metaRow}>
          {!!data.type && <Badge text={data.type} />}
          {!!data.jlpt && <Badge text={data.jlpt} tone="accent" />}
          {/* {!!data.frequency && (
            <Badge text={`빈도: ${data.frequency}`} tone="muted" />
          )} */}
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        {/* 의미(뜻) */}
        <SectionTitle title="의미" />
        <View style={styles.card}>
          {data.senses && (
            <>
              {data.senses.map((s, idx) => (
                <View
                  key={idx}
                  style={[styles.senseRow, idx !== 0 && styles.senseDivider]}>
                  <View style={styles.senseIndex}>
                    <Text style={styles.senseIndexText}>{idx + 1}</Text>
                  </View>
                  <View style={styles.senseBody}>
                    <Text style={styles.meaningText}>{s.meaning}</Text>
                    {!!s.notes && <Text style={styles.notes}>{s.notes}</Text>}
                    {!!s.tags?.length && (
                      <View style={styles.tagRow}>
                        {s.tags.map(t => (
                          <View key={t} style={styles.smallTag}>
                            <Text style={styles.smallTagText}>{t}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </>
          )}
        </View>

        {/* 예문 */}
        <SectionTitle title="예문" action="더보기" />
        <View style={styles.card}>
          {data.examples && (
            <>
              {data.examples.map((ex, idx) => (
                <View
                  key={ex.id}
                  style={[
                    styles.exampleRow,
                    idx !== 0 && styles.exampleDivider,
                  ]}>
                  <View style={styles.exampleMain}>
                    {/* 일본어 문장 (토큰 단위로) */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {ex.tokens.map((t, i) => (
                        <View
                          key={`${t.jp}-${i}`}
                          style={{ alignItems: 'center', marginRight: 2 }}>
                          {/* 후리가나 */}
                          {t.reading ? (
                            <Text style={styles.exampleReading}>
                              {t.reading}
                            </Text>
                          ) : (
                            // 읽기 없는 경우 높이 맞춤용
                            <View
                              style={{
                                height: styles.exampleReading.fontSize ?? 10,
                              }}
                            />
                          )}
                          {/* 원문 */}
                          <Text style={styles.exampleJP}>{t.jp}</Text>
                        </View>
                      ))}
                    </View>

                    {/* 한국어 번역 */}
                    <Text style={styles.exampleKR}>{ex.ko}</Text>

                    {/* 로마자 (있을 때만) */}
                    {ex.ro && <Text style={styles.exampleRO}>{ex.ro}</Text>}
                  </View>

                  <ChevronRight size={16} color="#8E8E93" />
                </View>
              ))}
            </>
          )}
        </View>

        {/* 유의어 / 반의어 */}
        {/* {(!!data.synonyms?.length || !!data.antonyms?.length) && (
          <View style={styles.row2col}>
            {!!data.synonyms?.length && (
              <View style={styles.col}>
                <SectionTitle title="유의어" />
                <View style={styles.card}>
                  <View style={styles.chipWrap}>
                    {data.synonyms.map(w => (
                      <TouchableOpacity
                        key={w}
                        style={styles.chip}
                        activeOpacity={0.8}>
                        <Text style={styles.chipText}>{w}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            )}
            {!!data.antonyms?.length && (
              <View style={styles.col}>
                <SectionTitle title="반의어" />
                <View style={styles.card}>
                  <View style={styles.chipWrap}>
                    {data.antonyms.map(w => (
                      <TouchableOpacity
                        key={w}
                        style={styles.chip}
                        activeOpacity={0.8}>
                        <Text style={styles.chipText}>{w}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            )}
          </View>
        )} */}

        {/* 여백 */}
        <View style={{ height: 32 }} />
      </ScrollView>

      {/* 하단 고정 액션 */}
      {/* <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.ctaPrimary} activeOpacity={0.85}>
          <Text style={styles.ctaPrimaryText}>단어장에 추가</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctaGhost} activeOpacity={0.85}>
          <Text style={styles.ctaGhostText}>퀴즈 생성</Text>
        </TouchableOpacity>
      </View> */}

      {data.type === 'verb' ? (
        <VerbLogicChips meta={data.meta} />
      ) : data.type === 'adj' ? (
        <AdjectiveLogicChips meta={data.meta} />
      ) : null}
    </View>
  );
}
