import { Pressable } from 'react-native';
import SecondaryButtonProps from './interfaces';
import Styles from './secondary-button.styles';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';

const SecondaryButton = ({ label, onPress, ...props }: SecondaryButtonProps) => {
  return (
    <Pressable
      onPress={() => {
        !props.disabled && onPress();
      }}
      style={({ pressed }) => [Styles.secondary, pressed && Styles.pressed]}
      {...props}
    >
      <Box style={[Styles.container, { ...props.containerStyle }]}>
        <TextFactory style={Styles.label}>{label}</TextFactory>
      </Box>
    </Pressable>
  );
};

export default SecondaryButton;
