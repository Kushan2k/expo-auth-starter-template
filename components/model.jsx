import { View, Text, Dimensions, TextInput, Switch, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import ReactNativeModal from 'react-native-modal'
import { db } from '../utils/firebaseConfig'
import { doc,setDoc } from 'firebase/firestore'
import { useRouter } from 'expo-router'



const ModelSelect = ({ show, setShow,user_id }) => {
  
  const [name, setName] = React.useState('')
  const [isEnabled, setIsEnabled] = useState(false);
  //true=customer false=seller

  const [error, setError] = React.useState()

  const router=useRouter()

  const [loading, setLoading] = React.useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  async function save_type() {
    setLoading(true)

    const ref = doc(db, "users", user_id)
    let type;
    try {
      if (isEnabled) {
        //register as seller
        type = 'seller'

        const stoerRef = doc(db, 'stores',user_id)
        
        await setDoc(stoerRef,{
          store_name:name
        })

      } else {
        //register as customer
        type='customer'
      }
      //TODO firestore update user type
      
      
      await setDoc(ref, {
        type,
      })

      setLoading(false)
      router.replace('/login')
      

      
    } catch (e) {
      setError(e)
      setLoading(false)
      setShow(false)
    }
  }
  return (

    <ReactNativeModal  backdropColor='#000' animationIn={'slideInUp'}  animationInTiming={400} isVisible={show} >
      <View style={{
        backgroundColor:'#FFF',
        
        
      }} className='rounded-md p-4'>
        <Text className='text-center text-black text-xl font-semibold'>Who are you ?</Text>

        
        <View className='w-full mb-4'>

          {
            error && (
              <Text className="text-lg text-red-500 font-semibold mb-2 text-center">
                {error.message}
              </Text>
            )
          }
          <Text className="text-lg text-gray-500 font-semibold mb-2">I am a</Text>
          <View className='flex-row justify-around items-center'>
            <Text style={{
              color: !isEnabled ? '#00FF00' : '#767577',
              letterSpacing:1
            }} className='text-gray-500 font-extrabold '>Customer</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#00FF00'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{
              color: isEnabled ? '#f5dd4b' : '#767577',
              letterSpacing:1
            }} className='text-gray-500 font-extrabold'>Seller</Text>
          </View>
        </View>
        {
          isEnabled ? (
            <View className='w-full mb-4'>
              <Text className="text-lg text-gray-500 font-semibold mb-2">Name</Text>
              <TextInput value={name} onChangeText={(e) => {
                setName(e)
              }} inputMode='text' className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your name" />
            </View>
          ) : null
        }
        <View className='w-full my-5'>
            <TouchableOpacity disabled={loading} onPress={save_type} activeOpacity={0.5} className="p-2 rounded-lg bg-black flex flex-row items-center justify-center gap-x-2"  >
              {
                  loading && (
                    <ActivityIndicator color='white' size='large' />
                  )
              }
              <Text className=' text-center font-bold text-lg text-white '>
                
                {
                  !loading && 'Save'
                }
              </Text>
            </TouchableOpacity>
          </View>
        
      </View>
    </ReactNativeModal>

  )
}

export default ModelSelect