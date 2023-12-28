import { forwardRef } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Styles from './box.styles';

import { boxProps } from './interfaces';

const Box = forwardRef((props: boxProps, ref: any): JSX.Element => {
  const BoxView = props.scroll ? (
    <ScrollView
      {...props}
      ref={ref}
      horizontal={props.horizontal}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? true}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator ?? true}
      nestedScrollEnabled={props.nestedScrollEnabled ?? true}
    >
      {props.children}
    </ScrollView>
  ) : (
    <View
      {...props}
      ref={props.ref}
      style={[props.style && props.style, props.center && Styles.center, props.centerFullScreen && Styles.centerFullScreen]}
    >
      {props.children}
    </View>
  );

  return props.onPress ? (
    <Pressable
      {...props}
      style={({ pressed }) => [
        props.style && props.style,
        props.center && Styles.center,
        props.centerFullScreen && Styles.centerFullScreen,
        pressed && { opacity: 0.5, backgroundColor: 'rgba(255, 255, 255, 0.1)' },
      ]}
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
