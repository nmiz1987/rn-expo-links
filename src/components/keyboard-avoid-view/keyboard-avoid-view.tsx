import { useEffect, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { KeyboardAvoidViewProps } from './keyboard-avoid-view.interface';
import Box from '@/src/controllers/box/box';

export default function KeyboardAvoidView({ wrapping, children, wrapperMaxHeight, ...props }: KeyboardAvoidViewProps) {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const containerMaxHeight = wrapperMaxHeight ? wrapperMaxHeight : Dimensions.get('window').height * 0.75;
  const screenDimensions = Dimensions.get('window').height;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e => {
      wrapping?.current.measureInWindow((x, y, width, height) => {
        const keyboardHeight = e.endCoordinates.height;
        const elementBottom = y + height;
        const keyboardTop = screenDimensions - keyboardHeight;
        if (elementBottom > keyboardTop) {
          const addPadding = elementBottom - keyboardTop + 10;
          setKeyboardHeight(addPadding);
        }
      });
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);

  return (
    <Box scroll {...props} style={{ marginBottom: keyboardHeight, maxHeight: containerMaxHeight }}>
      {children}
    </Box>
  );
}
