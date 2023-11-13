import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import links from '@/src/screens/links';
import { useToken } from '@/store/token/token';
import { GlobalColors } from '@/styles/global-colors';

function CustomNavigationDrawer({ ...props }) {
  const { isLoggedIn, clearToken } = useToken();
  const { state, navigation } = props;
  const router = useRouter();

  async function signOut() {
    await clearToken();
    router.push('/');
  }

  async function signIn() {
    router.push('/sign-in');
  }

  function filterScreens(str) {
    return ['_sitemap', '[...404]', 'sign-up'].some(item => str.includes(item));
  }

  const screensList = state.routes.filter(route => !filterScreens(route.name));

  return (
    <DrawerContentScrollView {...props}>
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
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;
