import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useToken } from '@/store/token/token';
import Box from '@/src/controllers/box/box';
import Styles from './custom-navigation-drawer.styles';
import { GlobalColors } from '@/styles/global-colors';

function CustomNavigationDrawer({ ...props }) {
  const { state } = props;
  const { isLoggedIn, clearToken, setToken } = useToken();
  const router = useRouter();

  async function signOut() {
    await clearToken();
    router.push('/');
  }

  async function logIn() {
    router.push('/auth/login');
  }

  return (
    <DrawerContentScrollView {...props} style={Styles.container}>
      <Box style={Styles.links}>
        <DrawerItemList descriptors={props.descriptors} state={props.state} navigation={props.navigation} />
      </Box>
      <Box style={Styles.specialButtons}>
        {isLoggedIn ? (
          <DrawerItem
            {...props}
            inactiveBackgroundColor={GlobalColors.IconsColors.blue}
            inactiveTintColor="white"
            label="Sign out"
            onPress={signOut}
          />
        ) : (
          <DrawerItem {...props} inactiveBackgroundColor={GlobalColors.IconsColors.blue} inactiveTintColor="white" label="Sign in" onPress={logIn} />
        )}
      </Box>
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;
