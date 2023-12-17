import LottieView from 'lottie-react-native';
import Styles from './loader.styles';
import Box from '@/src/controllers/box/box';
import { Platform } from 'react-native';

export default function loader() {
  return (
    <Box style={Styles.container}>
      {Platform.OS !== 'web' && <LottieView autoPlay style={Styles.lottie} source={require('@/assets/lotties/loader.json')} />}
    </Box>
  );
}
