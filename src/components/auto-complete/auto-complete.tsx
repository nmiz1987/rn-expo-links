import Box from '@/src/controllers/box/box';
import Spacer from '@/src/components/spacer/spacer';
import { useEffect, useMemo, useRef, useState } from 'react';
import TextFactory from '@/src/factories/text-factory/text-factory';
import Styles from './auto-complete.styles';
import useInputText from './hooks/useInputText';
import { AutoCompleteProps } from './auto-complete.interfaces';
import { Image } from 'expo-image';
import { Button, InputAccessoryView, Platform, TextInput, View } from 'react-native';
import { isRTL } from '@/src/i18n';
import { GlobalColors } from '@/styles/global-colors';

export default function AutoComplete({ label, onSelect, caption, isError = false, leftIconImage, categories = [], ...props }: AutoCompleteProps) {
  const { inputStatus, inputTextFocusHandler, setErrorStatus } = useInputText();

  const inputRef = useRef<TextInput>(null);
  const [showResults, setShowResults] = useState(false);
  const [filteredCategoriesState, setFilteredCategoriesState] = useState<string[]>([]);

  useEffect(() => {
    setErrorStatus(isError);
  }, [isError]);

  useEffect(() => {
    if (filteredCategoriesState.length === 1 && props.value === filteredCategoriesState[0]) {
      setShowResults(false);
    } else if (filteredCategoriesState.length === 0) {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  }, [props.value]);

  const filteredCategories = useMemo(() => {
    let list = categories.filter(category => category.toLowerCase().includes(props.value!.toLowerCase()));
    setFilteredCategoriesState(list);
    return (
      <Box style={Styles.resultsContainer} scroll>
        {list.map((category: string) => (
          <Box
            onPress={() => {
              onSelect(category);
              setShowResults(false);
            }}
            key={category}
          >
            <TextFactory type="h5" style={Styles.results} key={category}>
              {category}
            </TextFactory>
          </Box>
        ))}
      </Box>
    );
  }, [props.value]);

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
      <Box style={[Styles.inputContainer, inputStatus.activeStyle, props.style]}>
        {leftIconImage && (
          <Box style={Styles.leftIconWrapper}>
            <Image style={Styles.image} source={leftIconImage} contentFit="contain" />
          </Box>
        )}
        <TextInput
          ref={inputRef}
          allowFontScaling={false}
          onChangeText={props.onChangeText}
          style={Styles.textInput}
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
      </Box>
      {caption && (
        <TextFactory type="h5" style={Styles.errorText}>
          {caption}
        </TextFactory>
      )}
      {props.value?.length !== 0 && showResults && filteredCategories}
    </Box>
  );
}
