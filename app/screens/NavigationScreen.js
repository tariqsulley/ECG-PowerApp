import React, {useState} from 'react';
import { Text, View, StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Feather';
import SettingsIcon from "react-native-vector-icons/Feather"
import MeterIcon from "react-native-vector-icons/AntDesign"
import NotificationIcon from "react-native-vector-icons/MaterialIcons"
import NotificationPage from "./NotificationPage"
import MeterPage from "./MeterPage"
import SettingsPage from "./SettingsPage" 
import HomePage from './HomePage';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Tabs() {
const [color,setColor] = useState("black")

  return (
    <Tab.Navigator  tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
            style: {
                  backgroundColor: '#CE4418',
            } 
     }} screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor:"red",
          paddingHorizontal: 5,
          inActivecolor:"black",
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: 'white',
          position: 'absolute',
          borderTopWidth: 0,
          tabBarInactiveTintColor:"blue"
      },
    })}>
      <Tab.Screen name="Home" component={HomePage}  options={{
                  tabBarIcon: () => (
                      <View>
                          <HomeIcon
                              style={[{ color: "black"}]}
                              size={30}
                              name={'home'}
                          />
                      </View>
                  ),
              }}></Tab.Screen>

     <Tab.Screen name="Meters" component={MeterPage}  options={{
                  tabBarIcon: () => (
                      <View>
                          <MeterIcon
                              style={[{ color: "black"}]}
                              size={30}
                              name={'calculator'}
                          />
                      </View>
                  ),
              }}/>
    <Tab.Screen name="Notifications" component={NotificationPage}  options={{
                  tabBarIcon: () => (
                      <View>
                          <NotificationIcon
                              style={[{ color: "black"}]}
                              size={30}
                              name={'notifications-none'}
                          />
                      </View>
                  ),
              }}/>

      <Tab.Screen name="Settings" component={SettingsPage}  options={({route}) => ({
            tabBarVisible: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
    
                if (routeName === "Contact") {
                    return false
                }
    
                return true
            })(route),
                  tabBarIcon: () => (
                      <View>
                          <SettingsIcon
                              style={[{ color: "black"}]}
                              size={30}
                              name={'settings'}
                          />
                      </View>
                  ),
                  })} />
    </Tab.Navigator>
  );
}

export default function NavigationScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 90
    }
})