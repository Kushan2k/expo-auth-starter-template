import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const SellerHome = () => {
  return (
    <View>

      <Tabs.Screen options={{
        title: "Home",
        
      }} />
      <Text>SellerHome</Text>
    </View>
  )
}

export default SellerHome