import {ButtonProps} from '@ui-kitten/components';

import {TextStyle, ViewStyle} from 'react-native';

import PrimaryButtonProps from './primary-button/interfaces';
import SecondaryButtonProps from './secondary-button/interfaces';
import ButtonSwitchProps from './button-switch/interfaces';

type ButtonFactoryProps =
  | (PrimaryButtonProps & {
      type: 'primary';
      label: string;
    })
  | (SecondaryButtonProps & {
      type: 'secondary';
      label: string;
    })
  | (ButtonSwitchProps & {
      type: 'switch';
    })
  | (ButtonProps & {
      type?: 'default';
      label: string;
      style?: ViewStyle;
      lableStyle?: TextStyle;
    });

export default ButtonFactoryProps;

