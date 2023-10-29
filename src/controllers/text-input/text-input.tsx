import { forwardRef, useEffect, useRef } from 'react';
import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, View } from 'react-native';
import useInputText from './hooks/useInputText';
import TextInputProps from './interfaces';
import Styles from './text-input.styles';
import KeyboardAvoidView from '@/src/components/keyboard-avoid-view/keyboard-avoid-view';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import Text from '@/src/controllers/text/text';
import { isRTL, translate } from '@/src/i18n';
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
              <Box style={Styles.InputAccessory}>
                <Button title={translate('common.done')} onPress={() => ref?.current.blur()} />
              </Box>
            </InputAccessoryView>
          )}
          <Text style={[Styles.title, shownDisable && Styles.titleDisabled]}>{label}</Text>
          <Spacer size={8} />
          <View ref={boxRef} style={{ opacity: 1, backgroundColor: 'transparent', height: '100%' }}>
            <RNTextInput
              ref={ref}
              allowFontScaling={false}
              style={[
                props.style,
                Styles.textInput,
                inputStatus.activeStyle,
                shownDisable && Styles.inputDisabled,
                multiline && Styles.multiLine,
                shownDisable && Styles.titleDisabled,
              ]}
              // props.onFocus is important to show disable the focus color if the component wont active as input but as "displayed text"
              onFocus={props.onFocus || inputTextFocusHandler}
              onBlur={props.onFocus || inputTextFocusHandler}
              textAlign={isRTL ? 'right' : 'left'}
              placeholderTextColor={shownDisable ? GlobalColors.IconsColors.secondary : GlobalColors.IconsColors.primary}
              cursorColor={props.onFocus ? 'transparent' : '#000'}
              inputAccessoryViewID="inputID"
              // disabled={disabled}
              {...props}
            />
            {caption && <Text style={Styles.errorText}>{caption}</Text>}
          </View>
        </Box>
      </KeyboardAvoidView>
    );
  },
);

export default TextInput;
