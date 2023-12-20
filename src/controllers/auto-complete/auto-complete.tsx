import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import Text from '@/src/controllers/text/text';
import { useEffect, useRef } from 'react';
import TextFactory from '@/src/factories/text-factory/text-factory';
import Styles from './auto-complete.styles';
import useInputText from './hooks/useInputText';
import { AutoCompleteProps } from './interfaces';
import { Image } from 'expo-image';

import { Button, InputAccessoryView, Platform, TextInput as RNTextInput, View } from 'react-native';
import KeyboardAvoidView from '@/src/components/keyboard-avoid-view/keyboard-avoid-view';
import { isRTL } from '@/src/i18n';
import { EnumITextInputStatus } from './hooks/interfaces';
import { GlobalColors } from '@/styles/global-colors';

export default function AutoComplete({ label, caption, isError = false, leftIconImage, data = [], ...props }: AutoCompleteProps) {
  const { inputStatus, inputTextFocusHandler, setErrorStatus } = useInputText();
  const boxRef = useRef<View>(null);
  const inputRef = useRef<RNTextInput>(null);

  useEffect(() => {
    setErrorStatus(isError);
  }, [isError]);

  const renderOption = (item, index): React.ReactElement => {
    return (
      <Box style={Styles.resultsContainer} key={item.name}>
        <TextFactory type="h5" style={Styles.results}>
          {item.name}
        </TextFactory>
      </Box>
    );
  };

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
          <Box style={[Styles.inputContainer, inputStatus.activeStyle, props.multiline && Styles.multiLine, props.style]}>
            {leftIconImage && (
              <Box style={Styles.leftIconWrapper}>
                <Image style={Styles.image} source={leftIconImage} contentFit="contain" />
              </Box>
            )}
            <RNTextInput
              ref={inputRef}
              allowFontScaling={false}
              onChangeText={props.onChangeText}
              style={[Styles.textInput, props.multiline && Styles.multiLine]}
              onFocus={inputTextFocusHandler}
              onBlur={inputTextFocusHandler}
              multiline={props.multiline}
              numberOfLines={props.multiline ? 3 : 1}
              autoCapitalize="none"
              // props.onFocus is important to show disable the focus color if the component wont active as input but as "displayed text"
              textAlign={isRTL ? 'right' : 'left'}
              cursorColor={GlobalColors.blue}
              inputAccessoryViewID="inputID"
              {...props}
            />
            {data.length === 0 ? <Box /> : data.map(renderOption)}
          </Box>
          {caption && <Text style={Styles.errorText}>{caption}</Text>}
        </View>
      </Box>
    </KeyboardAvoidView>
  );
}
