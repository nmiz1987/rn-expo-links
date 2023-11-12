import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  links: {
    height: 300,
  },
  specialButtons: {
    height: height - 450,
    justifyContent: 'flex-end',
  },
});
