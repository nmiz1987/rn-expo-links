import Text from '@/src/controllers/text/text';
import Styles from './text-main-title.styles';

const TextMainTitle = ({...props}) => {
  return <Text {...props} style={[Styles.TextMainTitle, props.style]} />;
};

export default TextMainTitle;
