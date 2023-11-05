import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router/tabs';
import { useToken } from '@/store/token/token';
import { GlobalColors } from '@/styles/global-colors';

export default function RootLayout() {
  const { isLoggedIn } = useToken();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
          marginVertical: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          title: 'All My Links',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={24} />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: GlobalColors.gray,
          },
          tabBarActiveTintColor: GlobalColors.IconsColors.blue,
          headerLeft: () => <Ionicons name="menu" color="white" size={35} />,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
        }}
      />
      <Tabs.Screen
        name="author-favorites"
        options={{
          href: '/author-favorites',
          title: 'Author favorites',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={24} />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: GlobalColors.gray,
          },
          tabBarActiveTintColor: GlobalColors.IconsColors.heart,
          headerLeft: () => <Ionicons name="menu" color="white" size={35} />,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
        }}
      />
      {isLoggedIn && (
        <Tabs.Screen
          name="user-favorites"
          options={{
            href: '/user-favorites',
            title: 'Your favorites',
            tabBarIcon: ({ color, size }) => <Ionicons name="star" color={color} size={24} />,
            tabBarActiveTintColor: GlobalColors.IconsColors.gold,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: GlobalColors.gray,
            },
            headerLeft: () => <Ionicons name="menu" color="white" size={35} />,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 28,
            },
          }}
        />
      )}
    </Tabs>
  );
}
