import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import PrimaryButtonProps from './interfaces';
import Styles from './primary-button.styles';
import {Box} from '@/components/controllers/box/box';
import Text from '@/components/controllers/text/text';
import {GlobalColors} from '@/styles/global-colors';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const PrimaryButton = ({label, background, lightEffect, ...props}: PrimaryButtonProps) => {
  const offset = 500;
  const startPoint = Dimensions.get('window').width + offset;
  const endPoint = -offset;
  // light animation
  const lightPos = useSharedValue(startPoint);
  const config = {
    duration: 1500,
    easing: Easing.linear,
  };
  const style = useAnimatedStyle(() => {
    return {
      right: withTiming(lightPos.value, config),
    };
  });
  setInterval(() => {
    if (lightPos.value == endPoint) {
      lightPos.value = startPoint;
    } else {
      lightPos.value = endPoint;
    }
  }, 4000);

  return (
    <TouchableOpacity {...props} style={[Styles.primary, !props.disabled && Styles.shadow]}>
      {!props.disabled ? (
        <LinearGradient
          colors={GlobalColors.Brand.Gradient}
          style={{...Styles.background, ...background}}
          start={[0.0, 0.4]}
          end={[1.0, 0.5]}
          locations={[0.0, 0.85]}
        >
          {lightEffect && (
            <AnimatedLinearGradient
              style={[{height: offset, width: offset, position: 'absolute', transform: [{rotate: '-60deg'}]}, style]}
              colors={['transparent', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)', 'transparent']}
              start={[0.5, 0]}
              end={[0.5, 1]}
              locations={[0.0, 0.3, 0.5, 0.7, 1]}
              pointerEvents="none"
            />
          )}
          <Text style={[Styles.label, props.disabled && Styles.disabledText]}>{label}</Text>
        </LinearGradient>
      ) : (
        <Box style={Styles.disabledButton}>
          <Text style={[Styles.label, props.disabled && Styles.disabledText]}>{label}</Text>
        </Box>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
