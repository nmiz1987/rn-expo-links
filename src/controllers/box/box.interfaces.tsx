import { PressableProps, ScrollViewProps, ViewProps, ViewStyle } from 'react-native';

export type boxProps = ViewProps &
  PressableProps &
  ScrollViewProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
    center?: boolean;
    centerFullScreen?: boolean;
  };
