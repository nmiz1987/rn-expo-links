import { MutableRefObject, ReactNode } from 'react';

export interface KeyboardAvoidViewProps {
  children: ReactNode;
  wrapperMaxHeight?: number;
  wrapping: MutableRefObject<any>;
}
