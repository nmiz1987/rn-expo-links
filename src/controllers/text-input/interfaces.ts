export default interface TextInputProps {
  label?: string;
  caption?: string;
  isError?: boolean;
  shownDisable?: boolean;
  disabled?: boolean;
  style?: any;
  multiline?: boolean;
  onFocus?: () => void;
}
