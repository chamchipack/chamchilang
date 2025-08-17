import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: { marginBottom: 20, marginTop: 20 },
  listContainer: {
    paddingHorizontal: 0,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  box: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  labelText: {
    marginTop: 5,
    color: '#555',
    fontSize: 12,
  },
});
