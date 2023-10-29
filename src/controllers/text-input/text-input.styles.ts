import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { FontStyle } from '@/styles/styles';

export default StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    backgroundColor: GlobalColors.BgColors.Bg1,
    borderColor: GlobalColors.Border,
    ...FontStyle.H3,
    paddingVertical: 2,
    paddingBottom: 2,
    ...FontStyle.H3,
  },

  title: {
    ...FontStyle.H5,
    textAlign: 'left',
  },
  focusColor: {
    borderColor: GlobalColors.Brand.primary,
    stroke: GlobalColors.Brand.primary,
  },
  errorColor: {
    borderColor: GlobalColors.SystemColors.Error,
    backgroundColor: GlobalColors.SystemColors.Error2,
    stroke: GlobalColors.SystemColors.Error,
  },
  errorText: {
    paddingTop: 8,
    ...FontStyle.H5,
    color: 'red',
    textAlign: 'left',
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
  centered: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputAccessory: {
    backgroundColor: 'white',
  },
});
