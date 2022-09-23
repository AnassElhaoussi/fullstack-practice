import React, {useState} from 'react'
import {Heading, Button, Divider, Stack, Input, InputGroup, InputLeftElement, InputRightElement} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus, faKeyboard, faEnvelope, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return (
    <div className='flex w-full'>
      <div className='bg-topography'></div>
      <Stack 
      height='100vh'
      width='50%' 
      alignItems='start'
      gap='2rem'
      px={20} 
      justifyContent='center' 
      textAlign='center'>
        <Stack gap='0.5rem' alignItems='start'>
          <FontAwesomeIcon 
          icon={faUserPlus} 
          className='text-violet-700 text-2xl' />
          <Heading
          as='h3' size='lg' fontWeight={800}
          >Register an account</Heading>
          <Divider border='8px' borderRadius='1rem' width='10%' borderColor='blue' />
        </Stack>
        <Stack gap='0.5rem'>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faKeyboard} />} />
            <Input 
            type='text' 
            placeholder='Enter a username' 
            focusBorderColor='blueviolet' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faEnvelope} />} />
            <Input 
            type='email' 
            placeholder='Enter an email'
            focusBorderColor='blueviolet'
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faLock} />} />
            <Input 
            type={isPasswordShown ? 'text' : 'password'}
            placeholder='Create a password'
            focusBorderColor='blueviolet'
            />
            <InputRightElement 
            cursor='pointer' 
            children={isPasswordShown 
              ? <FontAwesomeIcon icon={faEyeSlash} /> 
              : <FontAwesomeIcon icon={faEye} />}
            onClick={() => setIsPasswordShown(!isPasswordShown)}
            userSelect='none'
            />
          </InputGroup>
          <Button colorScheme='purple' className='shadow-lg'>Submit</Button>
        </Stack>
      </Stack>
    </div>
  )
}

export default Register