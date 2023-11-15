import Box from "@/src/controllers/box/box";
import TextFactory from "@/src/factories/text-factory/text-factory";
import Style from "./store-preview.styles";
import { observer } from "mobx-react";
import { StorePreviewProps } from "./store-preview.interfaces";
import Card from "./card/card";
import { Image } from "expo-image";
import usePreview from "./hooks/usePreview";

function StorePreview({ listeners }: StorePreviewProps) {
  const { isOpen, toggleOpen } = usePreview();
  if (!__DEV__) return null;

  if (isOpen) {
    return (
      <Box scroll style={Style.container}>
        <Box style={Style.closeContainer} onPress={toggleOpen}>
          <Image style={Style.close} source={require("./asset/close.svg")} contentFit="contain" />
        </Box>
        <TextFactory type="h4" style={Style.title}>
          Store Preview
        </TextFactory>
        {listeners.length === 0 ? (
          <TextFactory type="h4" style={Style.title}>
            No Stores
          </TextFactory>
        ) : (
          listeners.map(listener =>
            Object.keys(listeners[0]).map(key => (
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
      <Box style={Style.closeContainerPosition} onPress={toggleOpen}>
        <Image style={Style.close} source={require("./asset/debug.svg")} contentFit="contain" />
      </Box>
    );
  }
}

export default observer(StorePreview);
