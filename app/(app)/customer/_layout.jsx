
import React from 'react'
import { Tabs } from 'expo-router'

const CustomerLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown:false
    }}>
      <Tabs.Screen name="index" options={{ title: "Home" }}/>
      <Tabs.Screen name="profile" options={{ title: "Profile" }}/>
    </Tabs>
  )
}

export default CustomerLayout