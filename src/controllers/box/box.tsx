import { forwardRef } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Style from './box.styles';

import { boxProps } from './interfaces';

const Box = forwardRef((props: boxProps, ref: any): JSX.Element => {
  const BoxView = props.scroll ? (
    <ScrollView
      ref={ref}
      horizontal={props.horizontal}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? true}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator ?? true}
      {...props}
    >
      {props.children}
    </ScrollView>
  ) : (
    <View
      ref={props.ref}
      style={[props.style && props.style, props.center && Style.center, props.centerFullScreen && Style.centerFullScreen]}
      {...props}
    >
      {props.children}
    </View>
  );

  return props.withoutFeedback ? (
    <Pressable
      ref={props.ref}
      style={[props.style && props.style, props.center && Style.center, props.centerFullScreen && Style.centerFullScreen]}
      onPress={props.onPress}
      {...props}
    >
      {props.children}
    </Pressable>
  ) : props.onPress ? (
    <Pressable
      {...props}
      style={[props.style && props.style, props.center && Style.center, props.centerFullScreen && Style.centerFullScreen]}
      onPress={props.onPress}
      ref={props.ref}
    >
      {props.children}
    </Pressable>
  ) : (
    BoxView
  );
});

export default Box;
