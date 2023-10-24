import {Pressable} from 'react-native';

import PrimaryButtonProps from './interfaces';
import Styles from './primary-button.styles';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';

const PrimaryButton = ({label, background, lightEffect, ...props}: PrimaryButtonProps) => {
  return (
    <Pressable {...props} style={[Styles.primary, !props.disabled && Styles.shadow]}>
      {!props.disabled ? (
        <TextFactory style={[Styles.label, props.disabled && Styles.disabledText]}>{label}</TextFactory>
      ) : (
        <Box style={Styles.disabledButton}>
          <TextFactory style={[Styles.label, props.disabled && Styles.disabledText]}>{label}</TextFactory>
        </Box>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
