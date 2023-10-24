import {Text as RNText, TextProps} from 'react-native';
import Styles from './text.styles';

const Text = ({...props}: TextProps) => {
  return <RNText allowFontScaling={false} style={Styles.text} {...props} />;
};

export default Text;
