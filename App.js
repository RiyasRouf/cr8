import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notification from "./App/pages/Notification/Notification";
import Profile from "./App/pages/Profile/Profile";
import Discover from "./App/pages/Discover/Discover";
import MyCourses from "./App/pages/MyCourses/MyCourses";
import Messages from "./App/pages/Messages/Messages";

// import { createStackNavigator } from '@react-navigation/stack';

var HomeTab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Discover") {
              iconName = focused
                ? require("./App/assets/images/discover.png")
                : require("./App/assets/images/discover.png");
            } else if (route.name === "MyCourses") {
              iconName = focused
                ? require("./App/assets/images/lens.png")
                : require("./App/assets/images/mycourses.png");
            } else if (route.name === "Messages") {
              iconName = focused
                ? require("./App/assets/images/lens.png")
                : require("./App/assets/images/messages.png");
            } else if (route.name === "Notifications") {
              iconName = focused
                ? require("./App/assets/images/lens.png")
                : require("./App/assets/images/notification.png");
            } else if (route.name === "Profile") {
              iconName = focused
                ? require("./App/assets/images/lens.png")
                : require("./App/assets/images/profile.png");
            }
            // You can return any component that you like here!

            return (
              <Image source={iconName} style={{ width: 25, height: 25 }} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <HomeTab.Screen name="Discover" component={Discover} />
        <HomeTab.Screen name="MyCourses" component={MyCourses} />
        <HomeTab.Screen name="Messages" component={Messages} />
        <HomeTab.Screen
          name="Notifications"
          component={Notification}
          options={{
            title: "Notifications",
            
          }}
        />
        <HomeTab.Screen name="Profile" component={Profile} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}
