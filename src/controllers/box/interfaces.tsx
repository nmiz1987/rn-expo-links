import {ScrollViewProps, ViewProps, ViewStyle, PressableProps} from 'react-native';

export type boxProps = ViewProps &
  PressableProps &
  ScrollViewProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
    center?: boolean;
  };
