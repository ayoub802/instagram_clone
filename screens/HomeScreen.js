import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Ionic from "react-native-vector-icons/Ionicons"
import { SafeAreaView } from 'react-native-safe-area-context'
import Stories from '../components/Stories'
import Post from '../components/Post'
const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={{ backgroundColor: 'white', height: "100%"}}>
        <StatusBar 
            animated={true}
            backgroundColor='white'
            barStyle='dark-content'
        />
        <View
            style={{
                justifyContent: 'space-between',
                flexDirection: "row",
                paddingHorizontal: 15,
                alignItems: "center"
            }}
        >
            <FontAwesome name='plus-square-o' style={{fontSize: 24}}/>
            <Text
            style={{
                fontSize: 25,
                fontWeight: '500',
                fontFamily: 'Lobster-Regular'
            }}
            >
                Instagram 
            </Text>
            <Feather name='navigation' style={{fontSize: 24}}/>
        </View>

        <ScrollView>
            <Stories />
            <Post />
            <View
            style={{alignItems: "center", justifyContent: "center", padding: 20}}
            >
                <Ionic 
                name="ios-reload-circle-sharp"
                style={{fontSize: 60, opacity: 0.2}}
                />
            </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen