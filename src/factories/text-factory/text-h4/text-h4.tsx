import Styles from './text-h4.styles';
import Text from '@/src/controllers/text/text';

const TextH4 = ({ ...props }) => {
  return <Text {...props} style={[Styles.h4, props.style]} />;
};

export default TextH4;
