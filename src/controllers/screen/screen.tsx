import { ForwardedRef, forwardRef } from 'react';
import { ScrollView, ViewProps } from 'react-native';
import Style from './screen.styles';
import Box from '@/src/controllers/box/box';

type Props = ViewProps & {
  noScroll?: boolean;
  noPadding?: boolean;
  blur?: boolean;
  contentContainerStyle?: ScrollView['props']['contentContainerStyle'];
};

const Screen = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  return (
    <>
      {props.noScroll ? (
        <Box style={[Style.noScroll, props.style]}>{props.children}</Box>
      ) : (
        <ScrollView
          style={Style.scrollViewContainer}
          contentContainerStyle={[Style.scrollViewContainerStyle, props.contentContainerStyle]}
          showsVerticalScrollIndicator
          showsHorizontalScrollIndicator
          scrollEnabled
          ref={ref}
          nestedScrollEnabled
        >
          {props.children}
        </ScrollView>
      )}
    </>
  );
});

export default Screen;
