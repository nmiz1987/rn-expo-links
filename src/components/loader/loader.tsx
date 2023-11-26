import LottieView from 'lottie-react-native';
import Styles from './loader.styles';
import Box from '@/src/controllers/box/box';

export default function loader() {
  return (
    <Box style={Styles.container}>
      <LottieView autoPlay style={Styles.lottie} source={require('@/assets/lotties/loader.json')} />
    </Box>
  );
}
