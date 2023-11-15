import Box from "@/src/controllers/box/box";
import TextFactory from "@/src/factories/text-factory/text-factory";
import Style from "./store-preview.styles";
import { observer } from "mobx-react";
import { StorePreviewPorps } from "./store-preview.interfaces";

function StorePreview({ listeners }: StorePreviewPorps) {
  // console.log(Object.keys(listeners[0]));
  return (
    <Box scroll style={Style.container}>
      <TextFactory>Store</TextFactory>
      {listeners.map(listener =>
        Object.keys(listeners[0]).map(key => {
          console.log(key);
          return (
            <>
              <TextFactory>{key}</TextFactory>
              <TextFactory>{JSON.stringify(listener["_links"], null, 2)}</TextFactory>
              <TextFactory>{listener["_categories"]}</TextFactory>
              <TextFactory>{listener["_favoriteLinks"]}</TextFactory>
              <TextFactory>{listener["_usersFavoriteLinksToken"]}</TextFactory>
            </>
          );
        }),
      )}
    </Box>
  );
}

export default observer(StorePreview);
