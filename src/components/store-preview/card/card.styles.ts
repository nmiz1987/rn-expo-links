import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    borderColor: '#1a78bb',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  bar: {
    height: 1,
    width: '100%',
    backgroundColor: '#1a78bb',
  },
  arrowContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 30,
    height: 30,
  },
  rotate: {
    transform: [{ rotate: '180deg' }],
  },
  infoContainer: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginBottom: 5,
  },
  circleLabel: {
    borderRadius: 50,
    backgroundColor: 'lightgray',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  paragraph: {
    flex: 1,
    textAlign: 'left',
  },
});
