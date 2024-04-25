import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const profile = () => {
  return (
    <View>
      <Stack.Screen options={{
        headerShown:false
      }}/>
      <Text>profile</Text>
    </View>
  )
}

export default profile