import Styles from "./text-h3.styles";
import Text from "@/src/controllers/text/text";

const TextH3 = ({ ...props }) => {
  return <Text {...props} style={[Styles.h3, props.style]} />;
};

export default TextH3;
