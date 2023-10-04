import Text from '@/src/controllers/text/text';
import Styles from './text-h5.styles';

const TextH5 = ({...props}) => {
  return <Text {...props} style={[Styles.h5, props.style]} />;
};

export default TextH5;
