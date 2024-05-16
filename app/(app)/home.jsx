import { View, Text, ActivityIndicator, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'

import { useRouter } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../utils/firebaseConfig'



const UserHome = () => {

  const { user} = useAuth()

  const router = useRouter()
  

  return (

    <View className='h-full  items-center justify-center'>
      <Image source={require('../../assets/images/adaptive-icon.png')}
        className='w-[200px] h-[200px]' />
      <ActivityIndicator size={'large'} color={'green'} />
      <Text className='text-black font-bold'>Welcome to Starting Screen!</Text>

      <Button title='Logout' onPress={async () => {
        try {
          await signOut(auth)
        } catch (error) {
           console.log(error)
        }
      }} />
    </View>

  )
}

export default UserHome