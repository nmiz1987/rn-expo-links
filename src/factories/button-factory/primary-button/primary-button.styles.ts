import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { FontStyle } from '@/styles/text-styles';

export default StyleSheet.create({
  primary: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 56,
    borderRadius: 8,
  },
  label: {
    ...FontStyle.H3,
    color: 'white',
  },
  pressed: {
    opacity: 0.7,
  },
  background: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  loading: {
    opacity: 0.7,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#3326f6',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
    borderRadius: 8,
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
