import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';

export default StyleSheet.create({
  container: {},
  links: {},
  specialButtons: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  singOutText: {
    color: GlobalColors.white,
    fontSize: 18,
  },
  button: {
    height: 40,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    borderRadius: 4,
  },
  bar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 1,
    width: '90%',
    backgroundColor: GlobalColors.lightGray,
    marginVertical: 16,
  },
  cardContainer: {
    height: 80,
    backgroundColor: GlobalColors.BgColors.Bg11,
    padding: 12,
    margin: 8,
    borderRadius: 8,
  },
  cardText: {
    color: GlobalColors.white,
  },
  error: {
    color: GlobalColors.red,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
