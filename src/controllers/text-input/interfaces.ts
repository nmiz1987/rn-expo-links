import { TextInputProps as RNTextInputProps } from "react-native";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  caption?: string;
  isError?: boolean;
  leftIconImage?: any;
  rightIconImage?: any;
  rightIconHandler?: () => void;
  onFocus?: () => void;
}
