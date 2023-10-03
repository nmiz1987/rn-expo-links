import {InputProps as KitInputProps} from '@ui-kitten/components';

type InputFactoryProps = {
  type: 'text';
  label: string;
  isError?: boolean;
  caption?: string;
  shownDisable?: boolean;
  disabled?: boolean;
} & KitInputProps;

export default InputFactoryProps;
