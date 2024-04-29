
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '../../context/authContext'

const AppLayout = () => {

  const {user,isAuthenticated}=useAuth()
 
  if(!isAuthenticated || !user){
    return <Redirect href={'/login'}/>
  }

  return <Stack screenOptions={{headerShown:false}} />
}

export default AppLayout