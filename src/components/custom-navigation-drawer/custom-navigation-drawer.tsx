import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useToken } from '@/store/token/token';

function CustomNavigationDrawer({ ...props }) {
  const { state } = props;
  const { isLoggedIn, clearToken, setToken } = useToken();
  const router = useRouter();

  const isActive = (index: number) => index === state.index;

  async function signOut() {
    await clearToken();
    console.log('asd', isLoggedIn);
    router.push('/');
  }

  async function logIn() {
    await setToken('test');
    router.push('/');
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList descriptors={props.descriptors} state={props.state} navigation={props.navigation} />
      {isLoggedIn && <DrawerItem inactiveBackgroundC label="Sign out" onPress={signOut} {...props} />}
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;
