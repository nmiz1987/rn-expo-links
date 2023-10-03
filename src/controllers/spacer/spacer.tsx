import {Box} from '@/src/controllers/box/box';
import SpacerProps from './interfaces';
import {createStyle} from './spacer.styles';

const Spacer = ({size = 16, isVertical = true}: SpacerProps) => {
  const style = createStyle(size, isVertical);
  return <Box style={style.container} />;
};

export default Spacer;
