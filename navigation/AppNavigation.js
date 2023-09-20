import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import BottomTabNavigation from './BottomTabNavigation';
import Status from '../components/Status';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <StatusBar style='auto'/>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Bottom' component={BottomTabNavigation}/>
            <Stack.Screen name='Status' component={Status}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation