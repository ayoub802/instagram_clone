import { View, Text, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { storyInfo } from '../constant/data'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {
    const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 15}}
    >
      {
        storyInfo.map((data, index) => {
            return (
                <TouchableOpacity
                 key={index}
                 onPress={() => navigation.push('Status', {
                  name: data.name,
                  image: data.image
                 })}
                > 
                <View style={{flexDirection:"column", paddingHorizontal: 8, position: "relative"}}>
                    {data.id == 1 ? (
                        <View
                          style={{position: "absolute", bottom: 15, right: 10, zIndex: 2, backgroundColor: 'white', borderRadius: 100}}
                        >
                          <Entypo name='circle-with-plus' style={{ fontSize: 20, color: "#405de6",  borderRadius: 100}}/>
                        </View>
                    ) : null 
                    }

                    <View
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: "white",
                        borderWidth: 1.8,
                        borderRadius: 100,
                        borderColor: "#c13584",
                        alignItems:"center",
                        justifyContent: "center"
                      }}
                    >
                        <Image 
                        style={{
                            width: '92%',
                            height: '92%',
                            backgroundColor: "orange",
                            borderRadius: 100,
                            resizeMode: "cover"
                        }}
                          source={data.image}
                        />
                    </View>
                    <Text style={{textAlign: "center", fontSize: 10, opacity: data.id == 0 ? 1 : 0.5}}>
                        {data.name}
                    </Text>
                </View>

                </TouchableOpacity>
            )
        })
      }
    </ScrollView>
  )
}

export default Stories