import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import links from "@/src/screens/links";
import { useToken } from "@/store/token/token";
import { GlobalColors } from "@/styles/global-colors";
import Box from "@/src/controllers/box/box";
import Styles from "./custom-navigation-drawer.styles";
import TextFactory from "@/src/factories/text-factory/text-factory";
import userStore from "@/store/user/user-store";
import Spacer from "@/src/controllers/spacer/spacer";

function CustomNavigationDrawer({ ...props }) {
  const { isLoggedIn, clearToken, setToken } = useToken();
  const { state, navigation } = props;
  const router = useRouter();

  async function signOut() {
    await clearToken();
    router.push("/");
  }

  async function signIn() {
    router.push("/sign-in");
  }

  function filterScreens(str) {
    return ["_sitemap", "[...404]", "sign-up", "sign-in"].some(item => str.includes(item));
  }

  const screensList = state.routes.filter(route => !filterScreens(route.name));

  return (
    <DrawerContentScrollView {...props}>
      <Box style={Styles.cardContainer}>
        <TextFactory type="h3" style={Styles.cardText}>
          Hello {isLoggedIn ? userStore.email : "Guest"}
        </TextFactory>
        {isLoggedIn && (
          <>
            <Spacer size={8} />
            <TextFactory type="h5" style={Styles.cardText}>
              Nice to see you again!
            </TextFactory>
          </>
        )}
      </Box>
      <Box style={Styles.links}>
        {screensList.map((route, index) => {
          const newLabel = links[route.name];
          if (!isLoggedIn && newLabel.onlyToSignUser === true) return null;

          return (
            <DrawerItem
              {...props}
              labelStyle={{ fontSize: 16, color: GlobalColors.white }}
              key={route.key}
              label={newLabel.drawerLabel}
              accessibilityLabel={newLabel.drawerLabel}
              inactiveBackgroundColor={GlobalColors.lightGray}
              focused={state.index === index}
              activeBackgroundColor={GlobalColors.IconsColors.blue}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </Box>
      <Box center>
        <Box style={Styles.bar} />
      </Box>
      <Box style={Styles.specialButtons}>
        {isLoggedIn ? (
          <Box style={Styles.button} onPress={signOut}>
            <Ionicons name="exit" color={GlobalColors.white} size={24} />
            <TextFactory style={Styles.singOutText}>Sing Out</TextFactory>
          </Box>
        ) : (
          <Box style={Styles.button} onPress={signIn}>
            <Ionicons name="enter" color={GlobalColors.white} size={24} />
            <TextFactory style={Styles.singOutText}>Sing In</TextFactory>
          </Box>
        )}
      </Box>
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;
