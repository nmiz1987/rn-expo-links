import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  noScroll: {
    paddingHorizontal: 16,
    width: '100%',
    height: '100%',
    paddingTop: Platform.select({ ios: 50, android: 20 }),
    backgroundColor: 'black',
  },
  scrollViewContainer: {
    height: '100%',
  },
  scrollViewContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: Platform.select({ ios: 50, android: 20 }),
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
  },
});
