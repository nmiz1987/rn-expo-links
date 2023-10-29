import { ForwardedRef, forwardRef } from 'react';
import { Platform, SafeAreaView, ScrollView, ViewProps } from 'react-native';
import Box from '@/src/controllers/box/box';

type Props = ViewProps & {
  noScroll?: boolean;
  noPadding?: boolean;
  blur?: boolean;
  contentContainerStyle?: ScrollView['props']['contentContainerStyle'];
};

export const Screen = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  return (
    <>
      {props.noScroll ? (
        <Box
          style={[
            {
              paddingHorizontal: 0,
              width: '100%',
              height: '100%',
            },
            props.style,
          ]}
        >
          {props.children}
        </Box>
      ) : (
        <ScrollView
          style={{ height: '100%' }}
          contentContainerStyle={[
            {
              paddingHorizontal: 16,
              paddingTop: Platform.select({ ios: 50, android: 20 }),
              width: '100%',
              flex: 1,
            },
            props.contentContainerStyle,
          ]}
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
