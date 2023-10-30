import { TextInputProps as RNTextInputProps } from 'react-native';
export interface TextInputProps extends RNTextInputProps {
  label?: string;
  caption?: string;
  isError?: boolean;
  iconImage?: string;
  iconHandler?: () => void;
  onFocus?: () => void;
}
