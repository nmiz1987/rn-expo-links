import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import useToast from './hooks/useToast';
import { ToastProps } from './toast.interfaces';
import Styles from './toast.styles';
import { Image } from 'expo-image';

const Toast = ({ icon, text, startLocation, endLocation, entranceDuration, exitDuration }: ToastProps) => {
  const { AnimatedView, animatedProps, CloseHandler } = useToast({ startLocation, endLocation, entranceDuration, exitDuration });

  const infoSvg = require('@/assets/svg/info.svg');
  const closeSvg = require('@/assets/svg/close.svg');

  return (
    <AnimatedView style={Styles.container} animatedProps={animatedProps}>
      <Box style={Styles.icon}>
        <Image style={Styles.image} source={infoSvg} contentFit="contain" />
      </Box>
      <TextFactory type="h5" style={Styles.text}>
        {text}
      </TextFactory>
      <Box style={Styles.close} onPress={CloseHandler}>
        <Image style={Styles.image} source={closeSvg} contentFit="contain" />
      </Box>
    </AnimatedView>
  );
};

export default Toast;
