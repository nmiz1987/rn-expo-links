import Text from '@/src/controllers/text/text';
import Styles from './text-h6.styles';

const TextH6 = ({...props}) => {
  return <Text {...props} style={[Styles.h6, props.style]} />;
};

export default TextH6;
