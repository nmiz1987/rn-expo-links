import { Image } from 'expo-image';
import { observer } from 'mobx-react';
import Card from './card/card';
import usePreview from './hooks/usePreview';
import { StorePreviewProps } from './store-preview.interfaces';
import Styles from './store-preview.styles';
import { View, Text, ScrollView, Pressable } from 'react-native';

function StorePreview({ listeners }: StorePreviewProps) {
  const { isOpen, toggleOpen } = usePreview();
  if (!__DEV__) return null;

  if (isOpen) {
    return (
      <ScrollView style={Styles.container}>
        <Pressable style={Styles.closeContainer} onPress={toggleOpen}>
          <Image style={Styles.close} source={require('./asset/close.svg')} contentFit="contain" />
        </Pressable>
        <Text style={Styles.title}>Store Preview</Text>
        {listeners.length === 0 ? (
          <Text style={Styles.title}>No Stores</Text>
        ) : (
          listeners.map(listener =>
            Object.keys(listener).map(key => (
              <View key={key}>
                <Card title={key} info={listener[key]} />
              </View>
            )),
          )
        )}
      </ScrollView>
    );
  } else {
    return (
      <Pressable style={Styles.closeContainerPosition} onPress={toggleOpen}>
        <Image style={Styles.close} source={require('./asset/debug.svg')} contentFit="contain" />
      </Pressable>
    );
  }
}

export default observer(StorePreview);
