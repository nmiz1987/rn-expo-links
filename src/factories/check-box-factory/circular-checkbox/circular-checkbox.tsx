import Styles from './circular-checkbox.styles';
import { CircularCheckboxProps } from './interfaces';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';

const CircularCheckBox = ({ label, status, style, ...props }: CircularCheckboxProps) => {
  return (
    <Box style={{ ...Styles.container, ...style }}>
      <Box style={[Styles.checkbox, status ? Styles.containerCheck : Styles.containerUnCheck]}>
        {status && <Box style={Styles.inlineContainer} />}
      </Box>
      <TextFactory style={Styles.label}>{label}</TextFactory>
    </Box>
  );
};

export default CircularCheckBox;
