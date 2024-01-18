import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { UseToastProps } from './useToast.interfaces';
import { Dimensions } from 'react-native';

let { height } = Dimensions.get('screen');

const useToast = ({ startLocation = height, endLocation = height - 150, entranceDuration = 500, exitDuration = 5000 }: UseToastProps) => {
  const AnimatedView = Animated.createAnimatedComponent(View);

  const progress = useSharedValue(startLocation);

  const animatedProps = useAnimatedProps<Partial<Animated.AnimateProps<any>>>(() => ({
    top: progress.value,
  }));

  function CloseHandler() {
    progress.value = withTiming(startLocation, { duration: entranceDuration });
  }

  function ShowHandler() {
    progress.value = withTiming(endLocation, { duration: entranceDuration });
  }

  setTimeout(() => {
    if (progress.value !== startLocation) {
      CloseHandler();
    }
  }, exitDuration);

  useEffect(() => {
    ShowHandler();
  }, []);

  return {
    AnimatedView,
    animatedProps,
    CloseHandler,
  };
};

export default useToast;
