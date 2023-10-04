import Text from '@/src/controllers/text/text';
import Styles from './text-warning.styles';
import {TextProps} from 'react-native';

const TextWarning = ({...props}: TextProps) => {
  return <Text {...props} style={Styles.warning} />;
};

export default TextWarning;
