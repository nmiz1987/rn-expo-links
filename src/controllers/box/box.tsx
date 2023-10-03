import React, {forwardRef} from 'react';
import {ScrollView, View, Pressable} from 'react-native';
import Style from './box.styles';

import {boxProps} from './interfaces';

export const Box = forwardRef((props: boxProps, ref: any): JSX.Element => {
  const BoxView = props.scroll ? (
    <ScrollView
      {...props}
      ref={ref}
      contentContainerStyle={[props.contentContainerStyle && props.contentContainerStyle]}
      horizontal={props.horizontal}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? true}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator ?? true}
    >
      {props.children}
    </ScrollView>
  ) : (
    <View {...props} ref={props.ref} style={[props.style && props.style, props.center && Style.center]}>
      {props.children}
    </View>
  );

  return props.withoutFeedback ? (
    <Pressable {...props} ref={props.ref} style={[props.style && props.style, props.center && Style.center]} onPress={props.onPress}>
      {props.children}
    </Pressable>
  ) : props.onPress ? (
    <Pressable {...props} ref={props.ref} style={[props.style && props.style, props.center && Style.center]} onPress={props.onPress}>
      {props.children}
    </Pressable>
  ) : (
    BoxView
  );
});
