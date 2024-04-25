import { View, Text,Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Index = () => {
  return (
    <View className='p-4 gap-y-5'>
      
      <Link asChild href={'(screens)/finder'} >
        <Text>Finder</Text>
      </Link>
      <Link asChild href={'(screens)/prediction'} >
        <Text>Suggestions</Text>
      </Link>
      
      
    </View>
  )
}

export default Index