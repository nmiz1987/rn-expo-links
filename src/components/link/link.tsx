import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Linking } from 'react-native';
import Heart from './heart/heart';
import { linkProps } from './interfaces';
import Style from './link.style';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import TextFactory from '@/src/factories/text-factory/text-factory';
import { GlobalColors } from '@/styles/global-colors';

export default function Link({ link }: { link: linkProps }) {
  function openLink(link: string) {
    Linking.openURL(link);
  }

  return (
    <Box onPress={() => openLink(link.link)} style={Style.container}>
      <Box style={Style.titleContainer}>
        <TextFactory type="h2" style={Style.title}>
          {link.name}
        </TextFactory>
        <Image style={Style.image} source={link.imgSrc} contentFit="contain" transition={200} />
      </Box>
      <TextFactory type="h6" style={Style.category}>
        Category: {link.category}
      </TextFactory>
      <Spacer />
      <TextFactory type="h4" style={Style.description}>
        {link.description}
      </TextFactory>
      <Spacer />

      <TextFactory type="h6" style={Style.category}>
        Tags: {link.tags}
      </TextFactory>
      <Spacer />

      <Box style={Style.recommended}>
        <Box style={Style.recommendedRow}>
          {link.recommended && (
            <>
              <TextFactory style={Style.recommendedTxt}> recommended!</TextFactory>
              <MaterialIcons name="recommend" color={GlobalColors.IconsColors.gold} size={28} />
            </>
          )}
        </Box>
        <Heart id={link._id} />
      </Box>
    </Box>
  );
}
