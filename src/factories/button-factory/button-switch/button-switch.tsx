import {Box} from '@/components/controllers/box/box';
import React, {useEffect} from 'react';
import {TouchableOpacity, Animated, Dimensions} from 'react-native';
import ButtonSwitchProps from './interfaces';
import useButtonSwitch from './hooks/useButtonSwitch';
const {width} = Dimensions.get('window');
import createStyle from './button-switch.styles';
import {GlobalColors} from '@/styles/global-colors';
import i18n from '@/services/i18n';
import TextFactory from '../../text-factory/text-factory';

const ButtonSwitch = ({
  leftText,
  rightText,
  onClickLeft,
  onClickRight,
  outerViewStyle,
  innerViewStyle,
  buttonsStyle,
  activeButtonStyle,

  activeColor = GlobalColors.Brand.primary,
  unActiveTextColor = GlobalColors.TextColors.secondary,
  unActiveBackColor = '#F2F1F6',
  horizontalOffset = 0,
  textSelectedStyle,
  textUnSelectedStyle,
  deafultSelectedIndex = 0,

  ...props
}: ButtonSwitchProps) => {
  const {active, setActive, xTabOne, setXTabOne, xTabTwo, setXTabTwo, translateX, setTranslateX} = useButtonSwitch(deafultSelectedIndex);
  const Styles = createStyle(translateX);

  const handleSlide = type => {
    Animated.spring(translateX, {
      toValue: type,

      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    console.log('active change', active, xTabTwo, horizontalOffset);

    if (active === 0) {
      const offset = i18n.isRTL ? -horizontalOffset : horizontalOffset;
      handleSlide(xTabOne + offset);
      onClickLeft();
    } else {
      const offset = i18n.isRTL ? horizontalOffset : -horizontalOffset;
      handleSlide(xTabTwo + offset);
      onClickRight();
    }
  }, [active, xTabOne, xTabTwo]);

  return (
    <Box style={[{width: width}, Styles.buttonSwitchOuter, {...outerViewStyle}]}>
      <Box style={[Styles.buttonSwitchInner, {...innerViewStyle}]}>
        <Box style={Styles.row}>
          <Animated.View style={[Styles.buttonSwitchActiveButton, {...activeButtonStyle}]} />
          <TouchableOpacity style={[Styles.buttonSwitchButton, {...buttonsStyle}]} onLayout={event => setXTabOne(0)} onPress={() => setActive(0)}>
            <TextFactory
              style={{
                ...(active === 1 ? {...Styles.switchTitleUnSelected, ...textUnSelectedStyle} : {...Styles.switchTitleSelected, ...textSelectedStyle}),

                color: active === 0 ? activeColor : unActiveTextColor,
              }}
            >
              {leftText}
            </TextFactory>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.buttonSwitchButton, {...buttonsStyle}]}
            onLayout={event => {
              xTabTwo === 0 ? setXTabTwo(i18n.isRTL ? -event.nativeEvent.layout.width : event.nativeEvent.layout.width) : null;
            }}
            onPress={() => setActive(1)}
          >
            <TextFactory
              style={{
                ...(active === 1 ? {...Styles.switchTitleSelected, ...textSelectedStyle} : {...Styles.switchTitleUnSelected, ...textUnSelectedStyle}),

                color: active === 1 ? activeColor : unActiveTextColor,
              }}
            >
              {rightText}
            </TextFactory>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonSwitch;
