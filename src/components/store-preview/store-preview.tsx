import Box from "@/src/controllers/box/box";
import TextFactory from "@/src/factories/text-factory/text-factory";
import Style from "./store-preview.styles";
import { observer } from "mobx-react";
import { StorePreviewProps } from "./store-preview.interfaces";
import Card from "./card/card";

function StorePreview({ listeners }: StorePreviewProps) {
  return (
    <Box scroll style={Style.container}>
      <TextFactory type="h4" style={Style.title}>
        Store Preview
      </TextFactory>
      {listeners.map(listener =>
        Object.keys(listeners[0]).map(key => (
          <Box key={key}>
            <Card title={key} info={listener[key]} />
          </Box>
        )),
      )}
    </Box>
  );
}

export default observer(StorePreview);
