import { PressableProps, TextStyle } from 'react-native';
export default interface PrimaryButtonProps extends PressableProps {
  label: string;
  labelStyle?: TextStyle[] | TextStyle;
  onPress: () => void;
}
