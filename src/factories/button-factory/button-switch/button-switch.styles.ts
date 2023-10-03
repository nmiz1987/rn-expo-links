import i18n from '@/services/i18n';
import { GlobalColors } from '@/styles/global-colors';
import { EnglishStyle, HebrewStyle } from '@/styles/styles';
import { StyleSheet } from 'react-native';

const createStyle = translateX => {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',

      position: 'relative',
    },

    switchTitleSelected: {
      ...(i18n.isRTL ? EnglishStyle.H6 : HebrewStyle.H6),
      textAlign: 'center',
    },
    switchTitleUnSelected: {
      ...(i18n.isRTL ? EnglishStyle.BodyText2 : HebrewStyle.BodyText2),
      textAlign: 'center',
    },

    buttonSwitchOuter: {
      paddingHorizontal: 16,
    },
    buttonSwitchInner: {
      backgroundColor: GlobalColors.BgColors.Bg4,
      borderRadius: 12,
    },
    buttonSwitchButton: {
      paddingVertical: 15,
      borderColor: 'transparent',
      borderRadius: 12,

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,

      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    buttonSwitchActiveButton: {
      backgroundColor: GlobalColors.BgColors.Bg1,
      paddingVertical: 11,
      top: 4,
      bottom: 4,
      borderRadius: 12,
      transform: [
        {
          translateX,
        },
      ],

      position: 'absolute',
      width: '50%',
    },
  });
};
export default createStyle;

