import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, View } from 'react-native';
import useInputText from './hooks/useInputText';
import { TextInputProps } from './interfaces';
import Styles from './text-input.styles';
import KeyboardAvoidView from '@/src/components/keyboard-avoid-view/keyboard-avoid-view';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import Text from '@/src/controllers/text/text';
import { isRTL } from '@/src/i18n';

export default function TextInput({ label, caption, isError = false, leftIconImage, rightIconImage, rightIconHandler, ...props }: TextInputProps) {
  const { inputStatus, inputTextFocusHandler, setErrorStatus } = useInputText();
  const boxRef = useRef<View>(null);
  const inputRef = useRef<RNTextInput>(null);

  useEffect(() => {
    setErrorStatus(isError);
  }, [isError]);

  return (
    <KeyboardAvoidView wrapping={boxRef}>
      <Box>
        {Platform.OS === 'ios' && (
          <InputAccessoryView nativeID="inputID">
            <Box style={Styles.InputAccessory}>
              <Button title="Done" onPress={() => inputRef?.current?.blur()} />
            </Box>
          </InputAccessoryView>
        )}
        <Text style={Styles.title}>{label}</Text>
        <Spacer size={8} />
        <View ref={boxRef} style={Styles.dummyWrapper}>
          <Box style={[Styles.inputContainer, inputStatus.activeStyle, props.style]}>
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
              // props.onFocus is important to show disable the focus color if the component wont active as input but as "displayed text"
              onFocus={props.onFocus || inputTextFocusHandler}
              onBlur={props.onFocus || inputTextFocusHandler}
              textAlign={isRTL ? 'right' : 'left'}
              cursorColor={props.onFocus ? 'transparent' : '#000'}
              inputAccessoryViewID="inputID"
              {...props}
            />
            <Box
              style={Styles.rightIconWrapper}
              onPress={() => {
                rightIconHandler && rightIconHandler();
              }}
            >
              {rightIconHandler && <Image style={Styles.image} source={rightIconImage} contentFit="contain" />}
            </Box>
          </Box>
          {caption && <Text style={Styles.errorText}>{caption}</Text>}
        </View>
      </Box>
    </KeyboardAvoidView>
  );
}
