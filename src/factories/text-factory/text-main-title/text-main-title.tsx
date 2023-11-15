import Styles from "./text-main-title.styles";
import Text from "@/src/controllers/text/text";

const TextMainTitle = ({ ...props }) => {
  return <Text {...props} style={[Styles.TextMainTitle, props.style]} />;
};

export default TextMainTitle;
