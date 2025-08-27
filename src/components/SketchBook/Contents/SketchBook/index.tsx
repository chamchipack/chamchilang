// screens/SketchBook/index.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Button,
} from 'react-native';
import { styles } from './style';
import { useSketchBook } from './hooks/useSketchBook';
import VerbLogicChips from '../../../WordView/Contents/Information/VerbLogicChips';
import { Copy } from 'lucide-react-native';
// ↓ 경로는 프로젝트에 맞게 조정하세요

export default function SketchBook() {
  const {
    query,
    setQuery,
    filteredWords, // Word[]
    addToken,
    tokens,
    removeTokenAt,
    clearTokens,
    particlesOpen,
    openParticles,
    closeParticles,
    particles,
    addParticle,
  } = useSketchBook();

  // ✅ 선택된 검색 결과 보관
  const [selectedWord, setSelectedWord] = useState<
    (typeof filteredWords)[number] | null
  >(null);

  const [selectedForm, setSelectedForm] = useState<string>('');

  const sentence = tokens.join('');
  const removeLastToken = () => {
    if (tokens.length === 0) return;
    removeTokenAt(tokens.length - 1);
  };

  type Word = (typeof filteredWords)[number];
  const isVerb = (w: Word | null): w is Word & { type: 'verb' } =>
    !!w && (w as any).type === 'verb';

  const renderWordChip = ({ item }: { item: Word }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.chip}
      onPress={() => {
        // addToken(item.jp); // 문장에 추가
        setSelectedWord(item); // 선택 상태 저장
      }}>
      <Text style={styles.chipText}>{item.jp}</Text>
    </TouchableOpacity>
  );

  const hasQuery = query.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* 상단 30% : 문장 */}
        <View style={styles.topPane}>
          <View style={styles.topHeader}>
            <Text style={styles.title}>문장 미리보기</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={removeLastToken}
                activeOpacity={0.8}
                style={[styles.actionBtn, styles.actionGhost]}>
                <Text style={styles.actionBtnText}>⌫</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // 복사 로직 작성
                  console.log('복사하기');
                }}
                activeOpacity={0.8}
                style={[
                  styles.actionBtn,
                  styles.actionGhost,
                  { flexDirection: 'row', alignItems: 'center', gap: 6 },
                ]}>
                <Copy size={16} color="#007AFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={clearTokens}
                activeOpacity={0.8}
                style={[styles.actionBtn, styles.actionPrimary]}>
                <Text style={styles.actionBtnText}>초기화</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onLongPress={removeLastToken}
            style={styles.sentenceBox}>
            {tokens.length === 0 ? (
              <Text style={styles.placeholder}>
                아래에서 단어를 선택해 문장을 만들어보세요.
              </Text>
            ) : (
              <Text numberOfLines={0} style={styles.sentenceText}>
                {sentence}
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        {/* 하단 70% : 검색 + (검색시) 칩 + (선택 단어가 동사면 로직칩) */}
        <View style={styles.bottomPane}>
          {/* 검색 입력 */}
          <View style={styles.searchRow}>
            <TextInput
              placeholder="단어 검색 (예: 流れる / ながれる / nagareru)"
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
              style={styles.input}
              returnKeyType="search"
              autoCorrect={false}
            />
            {/* 조사 버튼 */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={openParticles}
              style={styles.particleBtn}>
              <Text style={styles.particleBtnText}>조사</Text>
            </TouchableOpacity>
          </View>

          {/* 검색 결과 칩 */}
          {hasQuery ? (
            <View style={styles.listContent}>
              {filteredWords.length > 0 ? (
                <View style={styles.chipRowWrap}>
                  {filteredWords.map(w => (
                    <View key={w.id} style={styles.chipRow}>
                      {renderWordChip({ item: w })}
                    </View>
                  ))}
                </View>
              ) : (
                <>
                  <Text style={styles.placeholder}>검색 결과가 없어요.</Text>

                  <TouchableOpacity
                    onPress={() => {
                      addToken(query);
                      setSelectedWord(null);
                      setQuery('');
                    }}
                    activeOpacity={0.85}
                    style={{
                      marginTop: 12,
                      backgroundColor: '#007AFF',
                      paddingVertical: 14,
                      borderRadius: 8,
                      alignItems: 'center',
                      justifyContent: 'center',

                      // iOS Shadow
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.15,
                      shadowRadius: 4,

                      // Android Shadow
                      elevation: 3,
                    }}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: '600',
                          flexShrink: 1, // 길면 줄어들게
                          marginRight: 6, // "그대로 사용하기"랑 간격
                          maxWidth: '30%',
                        }}>
                        {query}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '800',
                          color: '#fff',
                          flexShrink: 0, // 무조건 보이게
                        }}>
                        그대로 사용하기
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
          ) : (
            <Text style={styles.placeholder}>
              검색어를 입력하면 단어 목록이 나타납니다.
            </Text>
          )}

          {/* ✅ 선택된 단어가 동사일 때만, 아래에 VerbLogicChips 출력 */}
          {isVerb(selectedWord) && (
            <>
              <VerbLogicChips
                meta={selectedWord.meta}
                onChange={a => {
                  if (a?.full) setSelectedForm(a?.full);
                }}
              />

              <TouchableOpacity
                onPress={() => {
                  addToken(selectedForm);
                  setSelectedWord(null);
                  setQuery('');
                }}
                activeOpacity={0.8}
                style={{
                  width: '100%',
                  backgroundColor: '#0F172A',
                  paddingVertical: 14,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 12,
                }}>
                <Text
                  style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                  변환된 단어 사용하기
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </KeyboardAvoidingView>

      {/* 조사 선택 모달 */}
      <Modal
        visible={particlesOpen}
        transparent
        animationType="fade"
        onRequestClose={closeParticles}
        statusBarTranslucent
        presentationStyle="overFullScreen">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>조사 선택</Text>
              <TouchableOpacity
                onPress={closeParticles}
                style={styles.modalClose}
                activeOpacity={0.8}>
                <Text style={styles.modalCloseText}>닫기</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={particles}
              keyExtractor={p => p}
              numColumns={8}
              columnWrapperStyle={styles.chipRow}
              contentContainerStyle={styles.modalContent}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.chip, styles.particleChip]}
                  onPress={() => {
                    addParticle(item);
                    closeParticles();
                  }}>
                  <Text style={styles.chipText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
