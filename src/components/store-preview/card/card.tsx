import { Image } from 'expo-image';
import { CardProps } from './card.interfaces';
import Styles from './card.styles';
import useCard from './hooks/useCard';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Card({ title, info }: CardProps) {
  const { isOpen, toggleOpen, getInfo } = useCard();

  return (
    <Box scroll style={Styles.container}>
      <Box style={Styles.titleRow} onPress={toggleOpen}>
        <TextFactory type="h5" style={Styles.title}>
          Attribute: {title}
        </TextFactory>
        <Box style={Styles.arrowContainer}>
          <Image style={[Styles.arrow, isOpen && Styles.rotate]} source={require('../asset/direction-up.svg')} contentFit="contain" />
        </Box>
      </Box>
      <Box style={[Styles.bar, !isOpen && { display: 'none' }]} />
      <Box style={[Styles.infoContainer, !isOpen && { display: 'none' }]}>{getInfo(info)}</Box>
    </Box>
  );
}

export default Card;
