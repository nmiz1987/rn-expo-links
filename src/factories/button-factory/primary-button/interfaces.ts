import {TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';
export default interface PrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  lableStyle?: TextStyle[] | TextStyle;
  background?: ViewStyle;
  lightEffect?: boolean;
}
