import React, {useState} from 'react'
import {Heading, Button, Divider, Stack, Input, InputGroup, InputLeftElement, InputRightElement} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus, faKeyboard, faEnvelope, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRegisterMutation } from '../helpers/auth'

const Register = () => {
  const {isLoading, isError, error, mutate} = useRegisterMutation()
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const usernameChange = (event) => setUsername(event.target.value)
  const emailChange = (event) => setEmail(event.target.value)
  const passwordChange = (event) => setPassword(event.target.value)

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
          <Divider borderColor='blue' border='8px' borderRadius='1rem' width='10%' />
        </Stack>
        <Stack gap='0.5rem'>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faKeyboard} />} />
            <Input 
            type='text' 
            placeholder='Enter a username' 
            focusBorderColor='blueviolet'
            value={username}
            onChange={usernameChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faEnvelope} />} />
            <Input 
            type='email' 
            placeholder='Enter an email'
            focusBorderColor='blueviolet'
            value={email}
            onChange={emailChange}
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
            value={password}
            onChange={passwordChange}
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
          <Button 
          colorScheme='purple' 
          className='shadow-lg'
          onClick={() => mutate(username, email, password)}
          >Submit</Button>
          <Heading 
          as='p' 
          size='xs' 
          textAlign='start'
          fontWeight='400'
          color='gray.400'
          >
              Already have an account ? 
              <Link to='/login' className='underline'>Login</Link>
          </Heading>
        </Stack>
      </Stack>
    </div>
  )
}

export default Register