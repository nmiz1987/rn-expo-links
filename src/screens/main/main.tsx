import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Style from './main.style';
import Box from '@/src/controllers/box/box';
import { Screen } from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';
import { useTheme } from '@react-navigation/native';

export default function Page() {
  const theme = useTheme();

  return (
    <Screen style={Style.screen}>
      <Box center style={Style.header}>
        <TextFactory style={Style.logo} type="h1">
          All My Links
        </TextFactory>
        <Box onPress={() => console.log('log in')}>
          <Ionicons name="log-in-outline" color={theme.dark ? "white" : "black"} size={35} />
        </Box>
      </Box>
    </Screen>
  );
}
