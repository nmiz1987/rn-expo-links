import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Linking } from 'react-native';
import Heart from './heart/heart';
import { linkProps } from './interfaces';
import Styles from './link-preview.style';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import TextFactory from '@/src/factories/text-factory/text-factory';
import { GlobalColors } from '@/styles/global-colors';

export default function LinkPreview({ link }: { link: linkProps }) {
  function openLink(link: string) {
    Linking.openURL(link);
  }

  return (
    <Box onPress={() => openLink(link.link)} style={Styles.container}>
      <Box style={Styles.titleContainer}>
        <TextFactory type="h2" style={Styles.title}>
          {link.name}
        </TextFactory>
        <Image style={Styles.image} source={link.imgSrc} contentFit="contain" transition={200} />
      </Box>
      <TextFactory type="h6" style={Styles.category}>
        Category: {link.category}
      </TextFactory>
      <Spacer />
      <TextFactory type="h4" style={Styles.description}>
        {link.description}
      </TextFactory>
      <Spacer />

      <TextFactory type="h6" style={Styles.category}>
        Tags: {link.tags}
      </TextFactory>
      <Spacer />

      <Box style={Styles.recommended}>
        <Box style={Styles.recommendedRow}>
          {link.recommended && (
            <>
              <TextFactory style={Styles.recommendedTxt}> recommended!</TextFactory>
              <MaterialIcons name="recommend" color={GlobalColors.IconsColors.gold} size={28} />
            </>
          )}
        </Box>
        <Heart id={link._id} />
      </Box>
    </Box>
  );
}
