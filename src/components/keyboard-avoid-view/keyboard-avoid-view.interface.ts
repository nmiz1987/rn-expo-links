import { MutableRefObject, ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface KeyboardAvoidViewProps {
  children: ReactNode;
  wrapperMaxHeight?: number;
  wrapping: MutableRefObject<any>;
  style?: ViewProps['style'];
}
