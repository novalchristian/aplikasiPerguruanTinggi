import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../pages/home.page';
import ProfilePage from '../pages/profile.page';
import SplashPage from '../pages/splash.page';
import HomeDetailPage from '../pages/home-detail.page';

const HomeStack = createStackNavigator();
function Home(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home-home"
                component={HomePage}
                options={{
                    headerShown:false,
                }}
            />
        </HomeStack.Navigator>
    )
}

const Drawer = createDrawerNavigator();
function Navigation(){
  return(
    <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            name: 'Home',
            headerTitle: 'Home',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerTitle: 'Profile',
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();
export default function Index() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Initial"
            component={Navigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomeDetail"
            component={HomeDetailPage}
            options={{
              headerShown: true,
              headerTitle:"Detail"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }