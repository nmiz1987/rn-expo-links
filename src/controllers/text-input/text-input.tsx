import React, {forwardRef, useEffect} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import useInputText from './hooks/useInputText';
import TextInputProps from './interfaces';
import Styles from './text-input.styles';
import {Box} from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import Text from '@/src/controllers/text/text';
import {GlobalColors} from '@/styles/global-colors';

const TextInput = forwardRef(({label, caption, isError = false, shownDisable = false, disabled, ...props}: TextInputProps, ref: any) => {
  const {inputStatus, inputTextFocusHandler, setErrorStatus} = useInputText();

  useEffect(() => {
    setErrorStatus(isError);
  }, [isError]);

  return (
    <Box>
      {label && <Text style={[Styles.title, shownDisable && Styles.titleDisabled]}>{label}</Text>}
      <Spacer size={8} />
      <RNTextInput
        ref={ref}
        editable={!disabled}
        allowFontScaling={false}
        textAlign="left"
        placeholderTextColor={shownDisable ? GlobalColors.IconsColors.secondary : '#000'}
        style={[Styles.textInput, inputStatus.activeStyle, shownDisable && Styles.inputDisabled]}
        // props.onFocus is important to show disable the focus color if the component wont active as input but as "displayed text"
        onFocus={props.onFocus || inputTextFocusHandler}
        onBlur={props.onFocus || inputTextFocusHandler}
        cursorColor={props.onFocus ? 'transparent' : '#000'}
        {...props}
      />
      {caption && <Text style={Styles.errorText}>{caption}</Text>}
    </Box>
  );
});

export default TextInput;
