import { router } from "expo-router";
import { observer } from "mobx-react";
import { FlatList } from "react-native";
import Styles from "./user-favorites.style";
import { linkProps } from "@/src/components/link/interfaces";
import Link from "@/src/components/link/link";
import Box from "@/src/controllers/box/box";
import Screen from "@/src/controllers/screen/screen";
import TextFactory from "@/src/factories/text-factory/text-factory";
import linksStore from "@/store/links/links-store";
import { useToken } from "@/store/token/token";
import LottieView from "lottie-react-native";
import Spacer from "@/src/controllers/spacer/spacer";
function Page() {
  const { isLoggedIn } = useToken();
  if (!isLoggedIn) {
    router.replace("/");
  }

  if (linksStore.favoriteLinks.length === 0) {
    return (
      <Screen noScroll>
        <Box style={Styles.conatiner}>
          <LottieView style={Styles.lottie} autoPlay source={require("@/assets/lotties/space.json")} />
          <Spacer size={32} />
          <TextFactory style={Styles.notFoundTxt} type="h2">
            First you need to select some link....
          </TextFactory>
        </Box>
      </Screen>
    );
  }

  return (
    <Screen noScroll>
      <FlatList
        data={linksStore.links.filter(link => linksStore.isFavoriteByUser(link._id))}
        renderItem={({ item }) => <Link link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}

export default observer(Page);
