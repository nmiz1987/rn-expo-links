import SpacerProps from './interfaces';
import { createStyle } from './spacer.styles';
import Box from '@/src/controllers/box/box';

const Spacer = ({ size = 16, isVertical = true }: SpacerProps) => {
  const style = createStyle(size, isVertical);
  return <Box style={style.container} />;
};

export default Spacer;
