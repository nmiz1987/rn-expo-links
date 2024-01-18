import { TextInputProps as RNTextInputProps } from 'react-native';

export interface AutoCompleteProps extends RNTextInputProps {
  label?: string;
  caption?: string;
  isError?: boolean;
  leftIconImage?: any;
  onFocus?: () => void;
  categories?: string[];
  onSelect: (item: string) => void;
}
