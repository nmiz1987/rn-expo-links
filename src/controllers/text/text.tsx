import {Text as RNText} from 'react-native';
import Styles from './text.styles';
import {TextProps} from 'react-native';

const Text = ({...props}: TextProps) => {
  return <RNText allowFontScaling={false} style={Styles.text} {...props} />;
};

export default Text;
