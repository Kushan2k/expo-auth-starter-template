import { View, Text, ActivityIndicator, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'

import { useRouter } from 'expo-router'



const UserHome = () => {

  const { user } = useAuth()

  const router = useRouter()
  

  return (

    <View className='h-full  items-center justify-center'>
      <Image source={require('../../assets/images/adaptive-icon.png')}
        className='w-[200px] h-[200px]' />
      <ActivityIndicator size={'large'} color={'green'} />
      <Text className='text-black font-bold'>Welcome to Starting Screen!</Text>
    </View>

  )
}

export default UserHome