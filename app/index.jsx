import { View, Text, TextInput, Button, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'

import StyledButton from '../components/button'
import { useAuth } from '../context/authContext'
import { useRouter } from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'

const Index = () => {

  const { setAuthenticated,setUser,user,isAuthenticated } = useAuth()
  const router=useRouter()

  
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setAuthenticated(true)
        router.replace('home')
        
      }
    
    })


    if (isAuthenticated && user) {
      router.replace('/(app)')
    }
    
  }, [])
  
  

  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        
      }}>
        <Image className='w-[200px] h-[200px]'
          source={require('../assets/images/adaptive-icon.png')}
          style={{
          resizeMode: 'contain',
        }}/>
      
        <View className='w-2/3 text-center mb-6'>
          <Text className="text-4xl font-bold mb-8 text-center">Welcome to Traveller.</Text>
          <Text className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium in praesentium, velit exercitationem ut! Magni doloremque culpa totam adipisci ipsum natus iste ullam temporibus? Possimus voluptate neque labore voluptatem.</Text>
        </View>

        <View className='w-4/5 mt-4'>
          <StyledButton title='Login' color='#000' href='login' textcolor='#FFF' />
          <StyledButton title='Register' color='#CCC' href='register' textcolor='#000' />
        </View>
        <Text className="text-center text-gray-500 mt-4">Start your journy today!</Text>
      </View>
    </ScrollView>
  )
}

export default Index