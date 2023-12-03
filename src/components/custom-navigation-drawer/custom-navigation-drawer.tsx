import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import Styles from './custom-navigation-drawer.styles';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/controllers/spacer/spacer';
import TextFactory from '@/src/factories/text-factory/text-factory';
import links from '@/src/screens/links';
import applicationStore from '@/store/application/application-store';
import { GlobalColors } from '@/styles/global-colors';
import { logOut } from '@/api/links/links.api';
import { useState } from 'react';
import Toast from '@/src/components/toast/toast';
import { ActivityIndicator } from 'react-native';

function CustomNavigationDrawer({ ...props }) {
  const { state, navigation } = props;
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function signOut() {
    setIsLoading(true);
    const res = await logOut(applicationStore.email, applicationStore.token);
    if (res.status.toString().startsWith('2')) {
      await applicationStore.deleteTokenHandler();
      setIsLoading(false);
      router.push('/');
    } else {
      setErrorMsg(`|${res.message}|`);
      setTimeout(() => {
        setErrorMsg('');
      }, 5000);
    }
  }

  async function signIn() {
    router.push('/sign-in');
  }

  function filterScreens(str) {
    return ['_sitemap', '[...404]', 'sign-up', 'sign-in'].some(item => str.includes(item));
  }

  const screensList = state.routes.filter(route => !filterScreens(route.name));

  return (
    <DrawerContentScrollView {...props}>
      <Box style={Styles.cardContainer}>
        <TextFactory type="h3" style={Styles.cardText}>
          Hello {applicationStore.isLoggedIn ? applicationStore.email : 'Guest'}
        </TextFactory>
        {applicationStore.isLoggedIn && (
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
          if (!applicationStore.isLoggedIn && newLabel.onlyToSignUser === true) return null;

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
        {applicationStore.isLoggedIn ? (
          <Box style={Styles.button} onPress={signOut}>
            <Ionicons name="exit" color={GlobalColors.white} size={24} />
            <TextFactory style={Styles.singOutText}>Sing Out</TextFactory>
            {isLoading && <ActivityIndicator size={'small'} color={GlobalColors.white} />}
          </Box>
        ) : (
          <Box style={Styles.button} onPress={signIn}>
            <Ionicons name="enter" color={GlobalColors.white} size={24} />
            <TextFactory style={Styles.singOutText}>Sing In</TextFactory>
          </Box>
        )}
        {errorMsg && (
          <TextFactory type="h4" style={Styles.error}>
            {errorMsg}
          </TextFactory>
        )}
      </Box>
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;
