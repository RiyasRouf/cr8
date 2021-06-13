import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Discover from './pages/Discover/Discover';
import MyCourses from './pages/MyCourses/MyCourses';
import Messages from './pages/Messages/Messages';


export default function App() {
  return (
    <NavigationContainer>
      <HomeTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = focused ? require('./assets/images/heart.png') : require('./assets/images/lens.png');
            } else if (route.name === 'MyCourses') {
              iconName = focused ? require('./assets/images/heart.png') : require('./assets/favicon.png');
            }
            else if (route.name === 'Messages') {
              iconName = focused ? require('./assets/images/heart.png') : require('./assets/favicon.png');
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? require('./assets/images/heart.png') : require('./assets/favicon.png');
            }
            else if (route.name === 'Profile') {
              iconName = focused ? require('./assets/images/heart.png') : require('./assets/favicon.png');
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


const HomeTab = createBottomTabNavigator(//{  
  //   Discover:{  
  //     screen:DiscoverScreen,  
  //     navigationOptions:{  
  //       tabBarLabel:'Discover',  
  //       tabBarIcon:({tintColor})=>(  
  //           <Icon name="ios-home" color={tintColor} size={25}/>  
  //       )  
  //     }  
  //   },  
  //   MyCourses: {  
  //     screen:MyCoursesScreen,  
  //     navigationOptions:{  
  //       tabBarLabel:'My Courses',  
  //       tabBarIcon:({tintColor})=>(  
  //           <Icon name="ios-person" color={tintColor} size={25}/>  
  //       )  
  //     }  
  //   },
  //   Messages:{  
  //     screen:MessagesScreen,  
  //     navigationOptions:{  
  //       tabBarLabel:'Messages',  
  //       tabBarIcon:({tintColor})=>(  
  //           <Icon name="ios-home" color={tintColor} size={25}/>  
  //       )  
  //     }  
  //   },  
  //   Notifications: {  
  //     screen:NotificationsScreen,  
  //     navigationOptions:{  
  //       tabBarLabel:'Notifications',  
  //       tabBarIcon:({tintColor})=>(  
  //           <Icon name="ios-person" color={tintColor} size={25}/>  
  //       )  
  //     }  
  //   },
  //   Profile: {  
  //     screen:ProfileScreen,  
  //     navigationOptions:{  
  //       tabBarLabel:'Profile',  
  //       tabBarIcon:({tintColor})=>(  
  //           <Icon name="ios-person" color={tintColor} size={25}/>  
  //       )  
  //     }  
  //   },
  // },  
  // {  
  //   initialRouteName: "Discover"  
  // } 
);