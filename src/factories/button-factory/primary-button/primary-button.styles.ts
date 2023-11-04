import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { FontStyle } from '@/styles/styles';

export default StyleSheet.create({
  primary: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  label: {
    ...FontStyle.H2,
    color: 'white',
  },
  pressed: {
    opacity: 0.7,
  },
  background: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#3326f6',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
    borderRadius: 16,
  },
  disabledButton: {
    backgroundColor: GlobalColors.BgColors.Bg4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
  },
  disabledText: {
    color: GlobalColors.TextColors.disable,
  },
});
