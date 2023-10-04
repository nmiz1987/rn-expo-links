import Text from '@/src/controllers/text/text';
import Styles from './text-h2.styles';

const TextH2 = ({...props}) => {
  return <Text {...props} style={[Styles.h2, props.style]} />;
};

export default TextH2;
