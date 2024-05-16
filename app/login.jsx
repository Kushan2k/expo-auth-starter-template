import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Link ,useRouter} from 'expo-router'
import { auth } from '../utils/firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'

import { useAuth } from '../context/authContext'

const Login = () => {

  const {setUser,setAuthenticated}=useAuth()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailError, setEmailError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState(false)
  const [error, setError] = React.useState()

  const [loading, setLoading] = React.useState(false)

  const router=useRouter()

  async function login_user() {

    setEmailError(false)
    setPasswordError(false)

    if (email.length < 1) {
      setEmailError(true)
      return
    }
    if (password.length < 1) {
      setPasswordError(true)
      return
    }

    setLoading(true)

    try {

      // login(email,password)

      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const user = userCred.user
      
      setUser(user)
      setAuthenticated(true)

      setLoading(false)

      router.replace('/home')
    } catch (e) {
      setError(e)
      setEmail('')
      setPassword('')
      setLoading(false)
    }
  }
  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      width: '100%',
    
    }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5',marginHorizontal:30, }}>
        <View className='text-left w-full'>
          <Text className="text-4xl text-black font-bold mb-8 ">Let's Sign you in</Text>
          <Text className="text-3xl  text-gray-400 font-semibold mb-4 ">Welcome back</Text>
          <Text className="text-3xl text-gray-400 font-semibold mb-8 ">You've been missed!</Text>
        </View>
        <View className='w-full'>
          {
            error && (

              
              <View className='my-2'>
                <Text className='text-red-700 text-center '>{error.message}</Text>
              </View>
            )
            
               
          }
          <View className='w-full mb-4'>
            <Text className="text-lg text-gray-500 font-semibold mb-2">Email</Text>
            <TextInput style={{
              borderColor:emailError ? 'red' : 'gray'
            }} value={email} onChangeText={(e) => {
              setEmail(e)
            }} inputMode='email' className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
          </View>
          <View className='w-full mb-4'>
            <Text className="text-lg text-gray-500 font-semibold mb-2">Password</Text>
            <TextInput style={{
              borderColor:passwordError ? 'red' : 'gray'
            }} secureTextEntry value={password} onChangeText={(e) => {
              setPassword(e)
            }} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your password" />
          </View>
          <View className='w-full my-5'>
            <TouchableOpacity disabled={loading} onPress={login_user} activeOpacity={0.5} className="p-2 rounded-lg bg-black flex flex-row items-center justify-center gap-x-2"  >
              {
                  loading && (
                    <ActivityIndicator color='white' size='large' />
                  )
              }
              <Text className=' text-center font-bold text-lg text-white '>
                
                {
                  !loading && 'Login'
                }
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-center text-gray-500 mt-4">Don't have an account?
            <Link asChild href={'register'}>
              <Text className="text-blue-500">Register</Text>
            </Link>
          </Text>
          <Text className="text-center text-gray-500 mt-4">Go to index 
            <Link asChild href={'/index'}>
              <Text className="text-blue-500"> index</Text>
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login