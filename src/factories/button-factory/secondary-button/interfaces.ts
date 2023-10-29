import { TouchableOpacityProps, ViewStyle } from 'react-native';
export default interface SecondaryButtonProps extends TouchableOpacityProps {
  label: string;
  containerStyle?: ViewStyle;
}
