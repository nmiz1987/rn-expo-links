import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

const marginHeight = 0.87;
const marginWidth = 0.9;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 8,
    backgroundColor: 'white',
    zIndex: 999,
    top: (height * (1 - marginHeight)) / 2,
    left: (width * (1 - marginWidth)) / 2,
    width: width * marginWidth,
    height: height * marginHeight,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 8,
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    fontStyle: 'normal',
    fontSize: 20,
  },
  closeContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 50,
  },
  close: {
    width: 30,
    height: 30,
  },
  closeContainerPosition: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    zIndex: 999,
    bottom: height * 0.05,
    left: width * 0.05,
  },
});
