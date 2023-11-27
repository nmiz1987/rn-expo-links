import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import Styles from './check-box.styles';
import { labelProps } from './interfaces';
import { Image } from 'expo-image';

const CheckBox = ({ label, status }: labelProps): JSX.Element => {
  return (
    <Box style={Styles.container}>
      <Box style={[Styles.checkbox, status ? Styles.containerCheck : Styles.containerUnCheck]}>
        {status && <Image style={Styles.svg} source={require('@/assets/svg/checkBoxIcon.svg')} contentFit="contain" />}
      </Box>
      <TextFactory type="h4" style={Styles.label}>
        {label}
      </TextFactory>
    </Box>
  );
};

export default CheckBox;
