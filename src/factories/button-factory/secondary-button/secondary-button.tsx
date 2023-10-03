import {TouchableOpacity} from 'react-native';
import Text from '@/components/controllers/text/text';
import React from 'react';
import SecondaryButtonProps from './interfaces';
import Styles from './secondary-button.styles';
import {Box} from '@/components/controllers/box/box';

const SecondaryButton = ({label, ...props}: SecondaryButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[Styles.secondary, Styles.shadow]}>
      <Box style={[Styles.container, {...props.containerStyle}]}>
        <Text style={Styles.label}>{label}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
