import { heightPixel, widthPixel } from '@/services/ui/pixel-ratio-service';
import { GlobalColors } from '@/styles/global-colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: widthPixel(12),
  },
  checkbox: {
    borderRadius: heightPixel(6),
    height: heightPixel(24),
    width: heightPixel(24),
    borderWidth: widthPixel(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCheck: {
    backgroundColor: GlobalColors.Brand.secondary,
    borderColor: 'transparent',
  },
  containerUnCheck: {
    borderColor: GlobalColors.white,
    backgroundColor: 'transparent',
  },
  svg: {
    height: heightPixel(16),
    width: heightPixel(16),
  },
  label: {
    color: GlobalColors.white,
  },
});
