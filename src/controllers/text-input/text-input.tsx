import { forwardRef, useEffect, useRef } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, View } from 'react-native';
import useInputText from './hooks/useInputText';
import TextInputProps from './interfaces';
import Style from './text-input.styles';
import KeyboardAvoidView from '@/src/components/keyboard-avoid-view/keyboard-avoid-view';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import Text from '@/src/controllers/text/text';
import { isRTL } from '@/src/i18n';
import { GlobalColors } from '@/styles/global-colors';

const TextInput = forwardRef(
  ({ label, caption, multiline = false, isError = false, shownDisable = false, disabled, ...props }: TextInputProps, ref: any) => {
    const { inputStatus, inputTextFocusHandler, setErrorStatus } = useInputText();
    const boxRef = useRef(null);

    useEffect(() => {
      setErrorStatus(isError);
    }, [isError]);

    return (
      <KeyboardAvoidView wrapping={boxRef}>
        <Box>
          {Platform.OS === 'ios' && (
            <InputAccessoryView nativeID="inputID">
              <Box style={Style.InputAccessory}>
                <Button title={"Done"} onPress={() => ref?.current.blur()} />
              </Box>
            </InputAccessoryView>
          )}
          <Text style={[Style.title, shownDisable && Style.titleDisabled]}>{label}</Text>
          <Spacer size={8} />
          <View ref={boxRef} style={Style.dummyWrapper}>
            <RNTextInput
              ref={ref}
              allowFontScaling={false}
              style={[
                props.style,
                Style.textInput,
                inputStatus.activeStyle,
                shownDisable && Style.inputDisabled,
                multiline && Style.multiLine,
                shownDisable && Style.titleDisabled,
              ]}
              // props.onFocus is important to show disable the focus color if the component wont active as input but as "displayed text"
              onFocus={props.onFocus || inputTextFocusHandler}
              onBlur={props.onFocus || inputTextFocusHandler}
              textAlign={'left'}
              placeholderTextColor={shownDisable ? GlobalColors.IconsColors.secondary : GlobalColors.IconsColors.primary}
              cursorColor={props.onFocus ? 'transparent' : '#000'}
              inputAccessoryViewID="inputID"
              // disabled={disabled}
              {...props}
            />
            {caption && <Text style={Style.errorText}>{caption}</Text>}
          </View>
        </Box>
      </KeyboardAvoidView>
    );
  },
);

export default TextInput;
