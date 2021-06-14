import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Discover from './pages/Discover/Discover';
import MyCourses from './pages/MyCourses/MyCourses';
import Messages from './pages/Messages/Messages';

var HomeTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = focused ? require('./assets/images/discover.png') : require('./assets/images/discover.png');
            } else if (route.name === 'MyCourses') {
              iconName = focused ? require('./assets/images/lens.png') : require('./assets/images/mycourses.png');
            }
            else if (route.name === 'Messages') {
              iconName = focused ? require('./assets/images/lens.png') : require('./assets/images/messages.png');
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? require('./assets/images/lens.png') : require('./assets/images/notification.png');
            }
            else if (route.name === 'Profile') {
              iconName = focused ? require('./assets/images/lens.png') : require('./assets/images/profile.png');
            }
            // You can return any component that you like here!
            
            return <Image source={iconName} style={{ width: 25, height: 25 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <HomeTab.Screen name="Discover" component={Discover} />
        <HomeTab.Screen name="MyCourses" component={MyCourses} />
        <HomeTab.Screen name="Messages" component={Messages} />
        <HomeTab.Screen name="Notifications" component={Notification} />
        <HomeTab.Screen name="Profile" component={Profile} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}
