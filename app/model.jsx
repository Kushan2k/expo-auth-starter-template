import { View, Text, Platform, Dimensions } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Model = () => {
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor:'yellow'
      }}>
        <Stack.Screen options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerShown:false,
          
          
        }}/>
        <Text>type.model</Text>
      </View>
    </SafeAreaView>
  )
}

export default Model