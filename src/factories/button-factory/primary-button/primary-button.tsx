import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';
import PrimaryButtonProps from './interfaces';
import Styles from './primary-button.styles';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import { GlobalColors } from '@/styles/global-colors';

const PrimaryButton = ({ label, onPress, ...props }: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={() => {
        !props.disabled && onPress();
      }}
      style={({ pressed }) => [Styles.primary, !props.disabled && Styles.shadow, pressed && Styles.pressed]}
      {...props}
    >
      {!props.disabled ? (
        <LinearGradient colors={GlobalColors.Brand.Gradient} style={Styles.background} start={[0.0, 0.4]} end={[1.0, 0.5]} locations={[0.0, 0.85]}>
          <TextFactory style={[Styles.label, props.disabled && Styles.disabledText]}>{label}</TextFactory>
        </LinearGradient>
      ) : (
        <Box style={Styles.disabledButton}>
          <TextFactory style={[Styles.label, props.disabled && Styles.disabledText]}>{label}</TextFactory>
        </Box>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
