import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
  },
  title: {
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
  },
  category: {
    color: 'white',
  },
  description: {
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginStart: 'auto',
    width: 40,
  },
  recommended: {
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  recommendedTxt: {
    color: 'white',
  },
  recommendedRow: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});
