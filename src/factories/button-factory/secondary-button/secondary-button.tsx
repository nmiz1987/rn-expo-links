import React from 'react';
import { TouchableOpacity } from 'react-native';
import SecondaryButtonProps from './interfaces';
import Styles from './secondary-button.styles';
import { Box } from '@/components/controllers/box/box';
import Text from '@/components/controllers/text/text';

const SecondaryButton = ({ label, ...props }: SecondaryButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[Styles.secondary, Styles.shadow]}>
      <Box style={[Styles.container, { ...props.containerStyle }]}>
        <Text style={Styles.label}>{label}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
