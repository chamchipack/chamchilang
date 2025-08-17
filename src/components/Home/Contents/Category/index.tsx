import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useCategory } from './hooks/useCategory';

type Props = {
  type?: string;
  isListPage?: boolean;
};

export default function Category({ type = '', isListPage = false }: Props) {
  const { categories, category, handlePress } = useCategory({
    type,
    isListPage,
  });

  const renderItem = ({ item }: any) => {
    const active = item.id === category;
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          isListPage && !active ? { opacity: 0.5 } : null,
        ]}
        onPress={() => handlePress(item.id)}
        activeOpacity={0.8}>
        <View style={styles.box}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.labelText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
