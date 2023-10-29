import { TextStyle, TouchableOpacityProps } from 'react-native';
export default interface PrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  lableStyle?: TextStyle[] | TextStyle;
  onPress: () => void;
}
