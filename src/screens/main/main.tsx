import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import Style from './main.style';
import Box from '@/src/controllers/box/box';
import { Screen } from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';

export default function Page() {
  const theme = useTheme();

  return (
    <Screen>
      <Box center style={Style.header}>
        <TextFactory style={Style.logo} type="h1">
          All My Links
        </TextFactory>
        <Box onPress={() => console.log('log in')}>
          <Ionicons name="log-in-outline" color={theme.dark ? 'white' : 'black'} size={35} />
        </Box>
      </Box>
    </Screen>
  );
}
