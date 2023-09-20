import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionic from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';



const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
     screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            height: 50,
        },

        tabBarIcon: ({ focused, size, coulour}) => {
            let iconName;
            if(route.name === 'Home'){
                iconName = focused ? 'home-sharp' : 'home-outline';
                size = focused ? size + 1 : size + 1;
            }        
            else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'ios-search-outline';
              } else if (route.name === 'Reels') {
                iconName = focused
                  ? 'caret-forward-circle'
                  : 'caret-forward-circle-outline';
              } else if (route.name === 'Activity') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
              }    
            return <Ionic name={iconName} size={size} color={coulour}/>
        },
     })}>
        <Tab.Screen name='Home' component={HomeScreen}  />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation