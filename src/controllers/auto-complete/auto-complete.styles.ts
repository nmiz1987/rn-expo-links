import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { FontStyle } from '@/styles/styles';
import { heightPixel, widthPixel } from '@/services/ui/pixel-ratio-service';

export default StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: GlobalColors.BgColors.Bg1,
    borderRadius: 10,
    borderColor: GlobalColors.Border,
    height: 44,
  },
  resultsContainer: {
    marginBottom: heightPixel(10),
  },
  results: {
    height: heightPixel(40),
    textAlign: 'left',
    borderBottomColor: 'gray',
    borderBottomWidth: heightPixel(1),
    paddingHorizontal: widthPixel(16),
    textAlignVertical: 'center',
  },
  textInput: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: 4,
    paddingBottom: 2,
    paddingHorizontal: 8,
    height: 44,
    alignItems: 'center',
    ...FontStyle.H4,
  },
  leftIconWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 18,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 28,
    height: 28,
  },
  title: {
    ...FontStyle.H5,
    color: GlobalColors.white,
  },
  focusColor: {
    borderColor: GlobalColors.blue,
  },
  errorColor: {
    borderColor: GlobalColors.SystemColors.Error,
    backgroundColor: GlobalColors.SystemColors.Error2,
  },
  errorText: {
    paddingTop: 8,
    ...FontStyle.H5,
    color: GlobalColors.red,
  },
  titleDisabled: {
    color: GlobalColors.TextColors.secondary,
  },
  inputDisabled: {
    backgroundColor: GlobalColors.BgColors.Bg4,
  },
  multiLine: {
    textAlignVertical: 'top',
    textAlign: 'center',
    height: 96,
  },
  InputAccessory: {
    backgroundColor: 'white',
  },
  dummyWrapper: {
    opacity: 1,
    backgroundColor: 'transparent',
    height: '100%',
  },
});
