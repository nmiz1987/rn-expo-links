import {TextStyle} from 'react-native';

interface StyleInterface {
  H1: TextStyle;
  H2: TextStyle;
  H3: TextStyle;
  H4: TextStyle;
  H5: TextStyle;
  H6: TextStyle;
}

export const FontStyle: StyleInterface = {
  H1: {
    fontFamily: 'RedHatDisplay_500Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 32,
  },
  H2: {
    fontFamily: 'RedHatDisplay_500Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
  },
  H3: {
    fontFamily: 'RedHatDisplay_500Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
  },
  H4: {
    fontFamily: 'RedHatDisplay_500Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
  },
  H5: {
    fontFamily: 'RedHatDisplay_500Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
  },
  H6: {
    fontFamily: 'RedHatDisplay_500Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
  },
};
