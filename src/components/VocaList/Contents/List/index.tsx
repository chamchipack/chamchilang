import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import { MoreHorizontal, Plus } from 'lucide-react-native';
import { styles } from './style';
import useNavigateToVocaWordList from './hooks/useNavigateToVocaWordList';

type VocabBook = {
  id: string;
  title: string;
  count: number;
  updatedAt: string; // '2025-08-16'
  progress?: number; // 0~1
  color?: string;
};

const MOCK_DATA: VocabBook[] = [
  {
    id: '1',
    title: 'N3 핵심 어휘',
    count: 312,
    updatedAt: '2025-08-14',
    progress: 0.42,
    color: '#0A84FF',
  },
  {
    id: '2',
    title: '일상 회화 표현',
    count: 128,
    updatedAt: '2025-08-12',
    progress: 0.18,
    color: '#FFD166',
  },
  {
    id: '3',
    title: '비즈니스 필수',
    count: 86,
    updatedAt: '2025-08-10',
    progress: 0.67,
    color: '#22C55E',
  },
  {
    id: '4',
    title: '여행 회화',
    count: 54,
    updatedAt: '2025-08-01',
    progress: 0.05,
    color: '#F472B6',
  },
];

export default function VocabList({
  data = MOCK_DATA,
  headerTitle = '단어장',
  showCreate = true,
}: {
  data?: VocabBook[];
  headerTitle?: string;
  showCreate?: boolean;
}) {
  const navigateToVocaWordList = useNavigateToVocaWordList();

  // ✅ 화면 표시용 로컬 상태
  const [books, setBooks] = useState<VocabBook[]>(data);

  // 팝업(액션시트) 상태
  const [menuForId, setMenuForId] = useState<string | null>(null);

  // 이름 변경 모달 상태
  const [renameOpen, setRenameOpen] = useState(false);
  const [renameTargetId, setRenameTargetId] = useState<string | null>(null);
  const [renameText, setRenameText] = useState('');

  // 새 단어장 추가 헬퍼
  const today = () => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  };
  const colors = useMemo(
    () => ['#0A84FF', '#FFD166', '#22C55E', '#F472B6', '#8B5CF6', '#34D399'],
    [],
  );
  const pickColor = () => colors[Math.floor(Math.random() * colors.length)];
  const nextIndex = useMemo(
    () => books.filter(b => b.title.startsWith('새 단어장')).length + 1,
    [books],
  );

  const handleCreate = () => {
    const newBook: VocabBook = {
      id: `${Date.now()}`,
      title: `새 단어장 ${nextIndex}`,
      count: 0,
      updatedAt: today(),
      progress: 0,
      color: pickColor(),
    };
    setBooks(prev => [newBook, ...prev]);
  };

  // ── 팝업 동작들 ─────────────────────────────────────────────
  const openMenu = (id: string) => setMenuForId(id);
  const closeMenu = () => setMenuForId(null);

  const handleDelete = () => {
    if (!menuForId) return;
    setBooks(prev => prev.filter(b => b.id !== menuForId));
    closeMenu();
  };

  const handleOpenRename = () => {
    if (!menuForId) return;
    const target = books.find(b => b.id === menuForId);
    setRenameTargetId(menuForId);
    setRenameText(target?.title ?? '');
    closeMenu();
    setRenameOpen(true);
  };

  const handleRenameSave = () => {
    if (!renameTargetId) return;
    setBooks(prev =>
      prev.map(b =>
        b.id === renameTargetId
          ? { ...b, title: renameText.trim() || b.title }
          : b,
      ),
    );
    setRenameOpen(false);
    setRenameTargetId(null);
    setRenameText('');
  };

  const handleRenameCancel = () => {
    setRenameOpen(false);
    setRenameTargetId(null);
    setRenameText('');
  };
  // ───────────────────────────────────────────────────────────

  const renderItem = ({ item }: { item: VocabBook }) => {
    const pct = Math.max(0, Math.min(1, item.progress ?? 0));
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => navigateToVocaWordList(item.id, item.title)}>
        {/* 좌측 컬러 바 */}
        <View
          style={[
            styles.colorBar,
            { backgroundColor: item.color ?? '#2B2B2E' },
          ]}
        />

        {/* 본문 */}
        <View style={styles.body}>
          <View style={styles.rowTop}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>

            {/* 점 세 개 버튼 */}
            <TouchableOpacity
              style={styles.iconBtn}
              activeOpacity={0.7}
              onPress={() => openMenu(item.id)}>
              <MoreHorizontal size={18} color="#8E8E93" />
            </TouchableOpacity>
          </View>

          <Text style={styles.meta}>
            {item.count}개 · 업데이트 {item.updatedAt}
          </Text>

          {/* 진행바 */}
          <View style={styles.progressWrap}>
            <View style={styles.progressBg} />
            <View style={[styles.progressFg, { width: `${pct * 100}%` }]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {showCreate && (
        <TouchableOpacity
          style={styles.createBtn}
          activeOpacity={0.85}
          onPress={handleCreate}>
          <Plus size={16} color="#fff" />
          <Text style={styles.createText}>새 단어장</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {ListHeader}

      <FlatList
        data={books}
        keyExtractor={it => it.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* ── 옵션 팝업 (삭제 / 이름 변경) ─────────────────── */}
      <Modal
        visible={menuForId !== null}
        transparent
        animationType="fade"
        onRequestClose={closeMenu}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'flex-end',
          }}
          onPress={closeMenu}>
          <View
            style={{
              backgroundColor: '#1C1C1E',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleOpenRename}
              style={{
                paddingVertical: 14,
                paddingHorizontal: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#2B2B2E',
              }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                이름 변경
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleDelete}
              style={{ paddingVertical: 14, paddingHorizontal: 8 }}>
              <Text
                style={{ color: '#FF5555', fontSize: 16, fontWeight: '700' }}>
                삭제
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={closeMenu}
              style={{
                marginTop: 8,
                paddingVertical: 14,
                paddingHorizontal: 8,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#2B2B2E',
                borderRadius: 10,
                backgroundColor: '#161618',
              }}>
              <Text
                style={{ color: '#E5E7EB', fontSize: 15, fontWeight: '600' }}>
                닫기
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      {/* ── 이름 변경 모달 ─────────────────────────────── */}
      <Modal
        visible={renameOpen}
        transparent
        animationType="fade"
        onRequestClose={handleRenameCancel}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.45)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
          onPress={handleRenameCancel}>
          <Pressable
            onPress={() => {}}
            style={{
              width: '100%',
              maxWidth: 420,
              backgroundColor: '#1C1C1E',
              borderRadius: 16,
              padding: 16,
              borderWidth: 1,
              borderColor: '#2B2B2E',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '800',
                marginBottom: 12,
              }}>
              단어장 이름 변경
            </Text>

            <TextInput
              value={renameText}
              onChangeText={setRenameText}
              placeholder="새 이름을 입력하세요"
              placeholderTextColor="#8E8E93"
              style={{
                backgroundColor: '#111114',
                borderWidth: 1,
                borderColor: '#2B2B2E',
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 12,
                color: '#fff',
                fontSize: 15,
              }}
            />

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 14 }}>
              <TouchableOpacity
                onPress={handleRenameCancel}
                activeOpacity={0.85}
                style={{
                  flex: 1,
                  backgroundColor: '#161618',
                  borderWidth: 1,
                  borderColor: '#2B2B2E',
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{ color: '#E5E7EB', fontSize: 15, fontWeight: '700' }}>
                  취소
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleRenameSave}
                activeOpacity={0.85}
                style={{
                  flex: 1,
                  backgroundColor: '#0A84FF',
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{ color: '#fff', fontSize: 15, fontWeight: '800' }}>
                  저장
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
