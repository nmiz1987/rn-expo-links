import {TextProps} from 'react-native';
import Styles from './text-warning.styles';
import Text from '@/src/controllers/text/text';

const TextWarning = ({...props}: TextProps) => {
  return <Text {...props} style={Styles.warning} />;
};

export default TextWarning;
