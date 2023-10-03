import {View, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function Page() {
  return (
    <View>
      <StatusBar hidden={true} />
      <Text>info</Text>
    </View>
  );
}
