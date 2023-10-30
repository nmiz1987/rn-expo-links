import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useToken } from '@/store/token/token';
import { GlobalColors } from '@/styles/global-colors';

function CustomNavigationDrawer({ ...props }) {
  const { state, navigation } = props;
  const { isLoggedIn, clearToken, setToken } = useToken();
  const router = useRouter();

  const isActive = (index: number) => index === state.index;

  async function signOut() {
    await clearToken();
    router.push('/');
  }

  async function logIn() {
    await setToken('test');
    console.log('login');
    router.push('/');
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList descriptors={props.descriptors} state={props.state} navigation={props.navigation} />
      {isLoggedIn && <DrawerItem label="Sign out" onPress={signOut} {...props} />}
      {!isLoggedIn && <DrawerItem label="Log in" onPress={logIn} {...props} />}
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;
