import { TouchableOpacityProps, ViewStyle } from 'react-native';

export interface CircularCheckboxProps extends TouchableOpacityProps {
  label?: string;
  status?: boolean;
  style?: ViewStyle;
}
