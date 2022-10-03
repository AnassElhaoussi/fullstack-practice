import React, {useState} from 'react'
import {Heading, Button, Text, CircularProgress, Divider, Stack, Input, InputGroup, InputLeftElement, InputRightElement} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus, faKeyboard, faEnvelope, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRegisterMutation } from '../helpers/auth'

const Register = () => {
  const {isLoading, isError, error, mutate} = useRegisterMutation()
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  })
  
  const onChangeHandler = (e) => {
    const value = e.target.value
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: value
    }))
  } 

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
          {isError && 
          <Text fontSize='md' textAlign='start' 
          color='red.500'>{error}</Text>}
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faKeyboard} />} />
            <Input 
            type='text' 
            placeholder='Enter a username' 
            focusBorderColor='blueviolet'
            name='username'
            value={credentials.username}
            onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faEnvelope} />} />
            <Input 
            type='email'
            name='email'
            placeholder='Enter an email'
            focusBorderColor='blueviolet'
            value={credentials.email}
            onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            pointerEvents='none' 
            children={<FontAwesomeIcon icon={faLock} />} />
            <Input 
            type={isPasswordShown ? 'text' : 'password'}
            name='password'
            placeholder='Create a password'
            focusBorderColor='blueviolet'
            value={credentials.password}
            onChange={onChangeHandler}
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
          onClick={() => {
            mutate(credentials)
          }}
          >{!isLoading ? 'Submit' : <CircularProgress isIndeterminate
           color='white' size='20px' />} </Button>
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