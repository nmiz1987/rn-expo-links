import { Image } from 'expo-image';
import { observer } from 'mobx-react';
import Card from './card/card';
import usePreview from './hooks/usePreview';
import { StorePreviewProps } from './store-preview.interfaces';
import Styles from './store-preview.styles';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';

function StorePreview({ listeners }: StorePreviewProps) {
  const { isOpen, toggleOpen } = usePreview();
  if (!__DEV__) return null;

  if (isOpen) {
    return (
      <Box scroll style={Styles.container}>
        <Box style={Styles.closeContainer} onPress={toggleOpen}>
          <Image style={Styles.close} source={require('./asset/close.svg')} contentFit="contain" />
        </Box>
        <TextFactory type="h4" style={Styles.title}>
          Store Preview
        </TextFactory>
        {listeners.length === 0 ? (
          <TextFactory type="h4" style={Styles.title}>
            No Stores
          </TextFactory>
        ) : (
          listeners.map(listener =>
            Object.keys(listener).map(key => (
              <Box key={key}>
                <Card title={key} info={listener[key]} />
              </Box>
            )),
          )
        )}
      </Box>
    );
  } else {
    return (
      <Box style={Styles.closeContainerPosition} onPress={toggleOpen}>
        <Image style={Styles.close} source={require('./asset/debug.svg')} contentFit="contain" />
      </Box>
    );
  }
}

export default observer(StorePreview);
