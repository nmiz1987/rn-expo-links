import {ForwardedRef, forwardRef} from 'react';
import {SafeAreaView, ScrollView, ViewProps} from 'react-native';
import {Box} from '@/src/controllers/box/box';

type Props = ViewProps & {
  noScroll?: boolean;
  noPadding?: boolean;
  blur?: boolean;
};

export const Screen = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  return (
    <SafeAreaView style={props.style}>
      {props.noScroll ? (
        <Box
          style={[
            {
              paddingHorizontal: 16,
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
          style={{height: '100%'}}
          contentContainerStyle={[{paddingHorizontal: 16}, props.style]}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          scrollEnabled={true}
          ref={ref}
          nestedScrollEnabled={true}
        >
          {props.children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
});
