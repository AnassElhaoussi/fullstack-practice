import React from 'react'
import {Heading, Stack} from '@chakra-ui/react'

const Register = () => {
  return (
    <div className='flex w-full'>
      <div className='bg-topography'></div>
      <Stack 
      height='100vh' 
      width='50%' 
      alignItems='center' 
      justifyContent='center' 
      textAlign='center'>
        <Heading
        as='h1' size='4xl' fontWeight={800} color='blue.500'
        >feekrah</Heading>
        <Heading>Register to feekrah</Heading>
      </Stack>
    </div>
  )
}

export default Register