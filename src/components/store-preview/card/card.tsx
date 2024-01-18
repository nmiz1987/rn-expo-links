import { Image } from 'expo-image';
import { CardProps } from './card.interfaces';
import Styles from './card.styles';
import useCard from './hooks/useCard';
import { View, Text, ScrollView, Pressable } from 'react-native';

function Card({ title, info }: CardProps) {
  const { isOpen, toggleOpen, getInfo } = useCard();

  return (
    <ScrollView style={Styles.container}>
      <Pressable style={Styles.titleRow} onPress={toggleOpen}>
        <Text style={Styles.title}>Attribute: {title}</Text>
        <View style={Styles.arrowContainer}>
          <Image style={[Styles.arrow, isOpen && Styles.rotate]} source={require('../asset/direction-up.svg')} contentFit="contain" />
        </View>
      </Pressable>
      <View style={[Styles.bar, !isOpen && { display: 'none' }]} />
      <View style={[Styles.infoContainer, !isOpen && { display: 'none' }]}>{getInfo(info)}</View>
    </ScrollView>
  );
}

export default Card;
