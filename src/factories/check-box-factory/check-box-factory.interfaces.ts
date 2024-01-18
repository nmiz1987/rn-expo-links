import { TouchableOpacityProps, ViewStyle } from 'react-native';

type CheckBoxFactoryProps =
  | (Base & {
      type: 'circular';
      style?: ViewStyle;
    } & TouchableOpacityProps)
  | Base;

type Base = {
  type?: 'circular';
  label?: string;
  status?: boolean;
};

export default CheckBoxFactoryProps;
