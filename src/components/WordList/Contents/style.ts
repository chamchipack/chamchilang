import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  overlayContainer: {
    marginTop: 20,
    paddingTop: 10,
    gap: 14,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 8,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#1C1C1E',
    borderWidth: 1,
    borderColor: '#2B2B2E',
  },
  chipText: {
    color: '#C9CCD1',
    fontSize: 12,
    fontWeight: '700',
  },
});
