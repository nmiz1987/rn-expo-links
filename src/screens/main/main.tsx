import {Box} from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import {Screen} from '@/src/controllers/screen/screen';
import Style from './main.style';
import {Ionicons} from '@expo/vector-icons';

export default function Page() {
  return (
    <Screen style={Style.screen}>
      <Box center style={Style.header}>
        <TextFactory style={Style.logo} type="h1">
          All My Links
        </TextFactory>
        <Box onPress={() => console.log('log in')}>
          <Ionicons name="log-in-outline" color={'white'} size={35} />
        </Box>
      </Box>
    </Screen>
  );
}
