import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './style';

/** 공용 라벨+인풋 */
const LabeledInput = ({
  label,
  ...rest
}: { label: string } & React.ComponentProps<typeof TextInput>) => {
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
};

export default React.memo(LabeledInput);
