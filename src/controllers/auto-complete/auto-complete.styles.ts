import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { FontStyle } from '@/styles/styles';
import { heightPixel, widthPixel } from '@/services/ui/pixel-ratio-service';

export default StyleSheet.create({
  title: {
    color: GlobalColors.white,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: heightPixel(1),
    backgroundColor: GlobalColors.BgColors.Bg1,
    borderRadius: heightPixel(10),
    borderColor: GlobalColors.Border,
    height: heightPixel(40),
  },
  leftIconWrapper: {
    paddingVertical: heightPixel(20),
    paddingHorizontal: widthPixel(18),
    width: widthPixel(28),
    height: heightPixel(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: heightPixel(28),
    height: heightPixel(28),
  },
  textInput: {
    backgroundColor: 'transparent',
    paddingVertical: heightPixel(4),
    paddingBottom: heightPixel(2),
    paddingHorizontal: widthPixel(8),
    height: heightPixel(44),
    alignItems: 'center',
    width: '100%',
    ...FontStyle.H4,
  },
  errorText: {
    paddingTop: heightPixel(8),
    color: GlobalColors.red,
  },
  resultsContainer: {
    backgroundColor: '#edf2fa',
    top: heightPixel(8),
    width: '100%',
    height: heightPixel(120),
    zIndex: 999,
    borderRadius: heightPixel(10),
  },
  results: {
    height: heightPixel(40),
    overflow: 'hidden',
    textAlign: 'left',
    width: '100%',
    // borderBottomColor: 'gray',
    // borderBottomWidth: heightPixel(1),
    paddingHorizontal: widthPixel(16),
    textAlignVertical: 'center',
  },
  focusColor: {
    borderColor: GlobalColors.blue,
  },
  errorColor: {
    borderColor: GlobalColors.SystemColors.Error,
    backgroundColor: GlobalColors.SystemColors.Error2,
  },
  InputAccessory: {
    backgroundColor: 'white',
  },
});
