import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, View } from 'react-native';
import useInputText from './hooks/useInputText';
import { TextInputProps } from './text-input.interfaces';
import Styles from './text-input.styles';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/components/spacer/spacer';
import { isRTL } from '@/src/i18n';
import { GlobalColors } from '@/styles/global-colors';
import TextFactory from '@/src/factories/text-factory/text-factory';

export default function TextInput({ label, caption, isError = false, leftIconImage, rightIconImage, rightIconHandler, ...props }: TextInputProps) {
  const { inputStatus, inputTextFocusHandler, setErrorStatus } = useInputText();
  const inputRef = useRef<RNTextInput>(null);

  useEffect(() => {
    setErrorStatus(isError);
  }, [isError]);

  return (
    <Box>
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID="inputID">
          <Box style={Styles.InputAccessory}>
            <Button title="Done" onPress={() => inputRef?.current?.blur()} />
          </Box>
        </InputAccessoryView>
      )}
      <TextFactory type="h5" style={Styles.title}>
        {label}
      </TextFactory>
      <Spacer size={8} />
      <Box style={[Styles.inputContainer, inputStatus.activeStyle, props.multiline && Styles.multiLine, props.style]}>
        {leftIconImage && (
          <Box style={Styles.leftIconWrapper}>
            <Image style={Styles.image} source={leftIconImage} contentFit="contain" />
          </Box>
        )}
        <RNTextInput
          ref={inputRef}
          allowFontScaling={false}
          style={[Styles.textInput, props.multiline && Styles.multiLine]}
          multiline={props.multiline}
          numberOfLines={props.multiline ? 3 : 1}
          autoCapitalize="none"
          // props.onFocus is important to show disable the focus color if the component wont active as input but as "displayed text"
          onFocus={inputTextFocusHandler}
          onBlur={inputTextFocusHandler}
          textAlign={isRTL ? 'right' : 'left'}
          cursorColor={GlobalColors.blue}
          inputAccessoryViewID="inputID"
          {...props}
        />
        {rightIconHandler && (
          <Box
            style={Styles.rightIconWrapper}
            onPress={() => {
              rightIconHandler && rightIconHandler();
            }}
          >
            <Image style={Styles.image} source={rightIconImage} contentFit="contain" />
          </Box>
        )}
      </Box>
      {caption && (
        <TextFactory type="h5" style={Styles.errorText}>
          {caption}
        </TextFactory>
      )}
    </Box>
  );
}
