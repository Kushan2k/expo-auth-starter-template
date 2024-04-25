import {  Text,  TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const StyledButton = ({title,color,href,textcolor}) => {
  return (

    <Link asChild href={href} className='w-full my-2'>
      <TouchableOpacity activeOpacity={0.5}  className="p-3 rounded-lg" style={{
        backgroundColor: color,
        
          
      }} >
        <Text style={{
            color:textcolor
          }} className=' text-center font-bold text-lg'>{title}</Text>
      </TouchableOpacity>
    </Link>
      
  )
}

export default StyledButton