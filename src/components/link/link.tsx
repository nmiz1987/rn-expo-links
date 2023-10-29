import { Image } from 'expo-image';
import { Linking } from 'react-native';
import { linkProps } from './interfaces';
import Style from './link.style';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import TextFactory from '@/src/factories/text-factory/text-factory';

export default function Link({ link }: { link: linkProps }) {
  function openLink(link: string) {
    Linking.openURL(link);
  }

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <Box onPress={() => openLink(link.link)} style={Style.container}>
      <Box style={Style.row}>
        <TextFactory type="h2" style={Style.title}>
          {link.name}
        </TextFactory>
        <Image style={Style.image} source={link.imgSrc} placeholder={blurhash} contentFit="cover" transition={1000} />
      </Box>
      <Spacer />
      <TextFactory type="h4" style={Style.title}>
        {link.description}
      </TextFactory>
    </Box>
  );
}
