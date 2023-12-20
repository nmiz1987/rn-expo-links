import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { heightPixel, widthPixel } from '@/services/ui/pixel-ratio-service';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
  },
  textContainer: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GlobalColors.white,
    textAlign: 'center',
  },
  link: {
    color: GlobalColors.IconsColors.blue,
    textDecorationLine: 'underline',
    textDecorationColor: GlobalColors.IconsColors.blue,
  },
  errorMsg: {
    color: GlobalColors.red,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  auto: {
    backgroundColor: GlobalColors.IconsColors.blue,
    padding: heightPixel(8),
    borderRadius: heightPixel(8),
    marginHorizontal: '10%',
    opacity: 0.8,
  },
});
