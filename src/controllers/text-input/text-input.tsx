import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, View } from 'react-native';
import useInputText from './hooks/useInputText';
import { TextInputProps } from './interfaces';
import Style from './text-input.styles';
import KeyboardAvoidView from '@/src/components/keyboard-avoid-view/keyboard-avoid-view';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import Text from '@/src/controllers/text/text';
import { isRTL, translate } from '@/src/i18n';

export default function TextInput({ label, caption, isError = false, iconImage, iconHandler, ...props }: TextInputProps) {
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
            <Box style={Style.InputAccessory}>
              <Button title="Done" onPress={() => inputRef?.current?.blur()} />
            </Box>
          </InputAccessoryView>
        )}
        <Text style={Style.title}>{label}</Text>
        <Spacer size={8} />
        <View ref={boxRef} style={Style.dummyWrapper}>
          <Box style={[Style.inputContainer, inputStatus.activeStyle, props.style]}>
            <RNTextInput
              ref={inputRef}
              allowFontScaling={false}
              style={[Style.textInput, props.multiline && Style.multiLine]}
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
              style={Style.iconWrapper}
              onPress={() => {
                iconHandler && iconHandler();
              }}
            >
              {iconHandler && <Image style={Style.image} source={iconImage} contentFit="contain" />}
            </Box>
          </Box>
          {caption && <Text style={Style.errorText}>{caption}</Text>}
        </View>
      </Box>
    </KeyboardAvoidView>
  );
}
