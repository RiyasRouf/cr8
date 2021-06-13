import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text>Discover Screen !</Text>
    </View>
  );
}

function MyCoursesScreen() {
  return (
    <View style={styles.container}>
      <Text>MyCoursesScreen !</Text>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text>MessagesScreen Screen !</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen !</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen Screen !</Text>
    </View>
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
        <HomeTab.Screen name="Discover" component={DiscoverScreen} />
        <HomeTab.Screen name="MyCourses" component={MyCoursesScreen} />
        <HomeTab.Screen name="Messages" component={MessagesScreen} />
        <HomeTab.Screen name="Notifications" component={NotificationsScreen} />
        <HomeTab.Screen name="Profile" component={ProfileScreen} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
