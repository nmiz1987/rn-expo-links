import { heightPixel, widthPixel } from '@/services/ui/pixel-ratio-service';
import { GlobalColors } from '@/styles/global-colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    paddingVertical: heightPixel(12),
    paddingHorizontal: widthPixel(12),
    flexDirection: 'row',
    marginHorizontal: widthPixel(12),
    backgroundColor: GlobalColors.TextColors.primary,
    borderRadius: heightPixel(6),
  },
  text: {
    color: GlobalColors.BgColors.Bg1,
    flexWrap: 'wrap',
    flex: 1,
  },
  icon: {
    width: heightPixel(24),
    height: heightPixel(24),
    marginRight: widthPixel(16),
  },
  image: {
    width: 28,
    height: 28,
  },
  close: {
    width: heightPixel(30),
    height: heightPixel(30),
    alignItems: 'center',
    marginLeft: widthPixel(8),
  },
});
