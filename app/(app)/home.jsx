import { View, Text, ActivityIndicator, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { db,auth } from '../../utils/firebaseConfig'

import { doc,getDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { useRouter } from 'expo-router'

import ModelSelect from '../../components/model'

const UserHome = () => {

  const { user } = useAuth()

  const [typefound,settypeFound]=useState(false)
  const [userType, setUserType] =useState('')

  const router = useRouter()
  

  useEffect(() => {
    
    async function redirectUser() {
      
      const userref = doc(db, 'users', user.uid)
      const userDoc = await getDoc(userref)

      if (userDoc.exists()) {
        
        const type = userDoc.data().type
        if (type === 'seller') {
          //redirect to seller home
          router.replace('/seller/seller-home')
        } else {
          //redirect to customer home
          router.replace('/customer/customer-home')
        }
      } else {
        settypeFound(true)
      }

    }

    redirectUser()
  },[user])
  


  return (

    <View className='h-full  items-center justify-center'>
      <Image source={require('../../assets/images/adaptive-icon.png')}
        className='w-[200px] h-[200px]' />
      <ActivityIndicator size={'large'} color={'green'} />
      <Text className='text-black font-bold'>Getting user info...</Text>

      {
        typefound && (

          <ModelSelect setShow={null} show={typefound} user_id={user.uid} />
        )
      }
    </View>

  )
}

export default UserHome