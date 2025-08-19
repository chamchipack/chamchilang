import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Check, RefreshCw } from 'lucide-react-native';
import { styles } from './style';
import type useVocaModal from './hooks/useVocaModal';

type Controller = ReturnType<typeof useVocaModal>;

export default function VocaModal({
  controller,
  title = '단어장 선택',
  subtitle = '단어를 추가할 단어장을 골라주세요',
}: {
  controller: Controller;
  title?: string;
  subtitle?: string;
}) {
  const {
    visible,
    items,
    selectedId,
    loading,
    saving,
    error,
    close,
    select,
    refresh,
    confirm,
  } = controller;

  const renderItem = ({
    item,
  }: {
    item: { id: string; title: string; count?: number };
  }) => {
    const active = selectedId === item.id;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => select(item.id)}
        style={[styles.row, active && styles.rowActive]}>
        <View style={styles.rowLeft}>
          <Text style={styles.rowTitle} numberOfLines={1}>
            {item.title}
          </Text>
          {typeof item.count === 'number' && (
            <Text style={styles.rowSub}>{item.count}개 단어</Text>
          )}
        </View>
        {active && (
          <View style={styles.checkWrap}>
            <Check size={16} color="#0A84FF" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={close}>
      <View style={styles.modalWrap}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalSub}>{subtitle}</Text>

          <View style={styles.controlRow}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.btn, styles.btnGhost, styles.btnSm]}
              onPress={refresh}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <RefreshCw size={16} color="#fff" />
                  <Text style={styles.btnText}>새로고침</Text>
                </>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.listBox}>
            {loading ? (
              <View style={styles.loadingBox}>
                <ActivityIndicator size="small" color="#fff" />
                <Text style={styles.loadingText}>불러오는 중…</Text>
              </View>
            ) : error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              <FlatList
                data={items}
                keyExtractor={it => it.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.sep} />}
                contentContainerStyle={{ paddingVertical: 6 }}
                ListEmptyComponent={
                  <Text style={styles.emptyText}>단어장이 없습니다</Text>
                }
              />
            )}
          </View>

          <View style={styles.modalRow}>
            <TouchableOpacity
              style={[styles.btn, styles.btnGhost, styles.btnHalf]}
              onPress={close}
              activeOpacity={0.9}
              disabled={saving}>
              <Text style={styles.btnText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btnPrimary, styles.btnHalf]}
              onPress={confirm}
              activeOpacity={0.9}
              disabled={saving}>
              {saving ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.btnText}>선택 완료</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
