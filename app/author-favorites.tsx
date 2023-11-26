import { FlatList } from "react-native";
import { linkProps } from "@/src/components/link/interfaces";
import Link from "@/src/components/link/link";
import Screen from "@/src/controllers/screen/screen";
import linksStore from "@/store/links/links-store";

export default function Page() {
  return (
    <Screen noScroll>
      <FlatList
        data={linksStore.links.filter(link => link.recommended)}
        renderItem={({ item }) => <Link link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}
