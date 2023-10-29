import { forwardRef } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Style from './box.styles';

import { boxProps } from './interfaces';

const Box = forwardRef((props: boxProps, ref: any): JSX.Element => {
  const BoxView = props.scroll ? (
    <ScrollView
      {...props}
      ref={ref}
      horizontal={props.horizontal}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? true}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator ?? true}
    >
      {props.children}
    </ScrollView>
  ) : (
    <View
      {...props}
      ref={props.ref}
      style={[props.style && props.style, props.center && Style.center, props.centerFullScreen && Style.centerFullScreen]}
    >
      {props.children}
    </View>
  );

  return props.withoutFeedback ? (
    <Pressable
      {...props}
      ref={props.ref}
      style={[props.style && props.style, props.center && Style.center, props.centerFullScreen && Style.centerFullScreen]}
      onPress={props.onPress}
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
