import Text from '@/src/controllers/text/text';
import Styles from './text-h1.styles';

const TextH1 = ({...props}) => {
  return <Text {...props} style={[Styles.h1, props.style]} />;
};

export default TextH1;
