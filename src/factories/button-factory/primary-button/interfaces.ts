import { TextStyle, PressableProps } from 'react-native';
export default interface PrimaryButtonProps extends PressableProps {
  label: string;
  labelStyle?: TextStyle[] | TextStyle;
  onPress: () => void;
}
