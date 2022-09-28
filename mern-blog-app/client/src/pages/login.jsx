import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Flex, Divider, Stack, Heading, Input, InputLeftElement, InputRightElement, InputGroup, Button} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return (
    <Flex height='100vh'>
      <Stack 
      width='50%' 
      justifyContent='center' 
      alignItems='start' 
      px={20} 
      py={8} 
      spacing={10}>
        <Flex 
        flexDirection='column' 
        alignItems='start' 
        gap='1rem'>
          <FontAwesomeIcon 
          icon={faRightToBracket} 
          className='text-2xl text-red-400' />
          <Heading 
          as='h2' 
          size='lg' 
          fontWeight='extrabold'>Login to your account</Heading>
          <Divider 
          borderColor='red' 
          border='8px' 
          borderRadius='1rem' width='10%' />
        </Flex>
        <Stack gap='0.3rem'>
          <InputGroup>
            <InputLeftElement 
            children={<FontAwesomeIcon icon={faUser} />} />
            <Input 
            placeholder='Enter your username' 
            type='text' focusBorderColor='red.400' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            children={<FontAwesomeIcon icon={faEnvelope} />} />
            <Input 
            placeholder='Enter your email'
            type='text' focusBorderColor='red.400' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement 
            children={<FontAwesomeIcon icon={faLock} />} />
            <Input placeholder='Enter your password' 
            type={isPasswordShown ? 'text' : 'password'} 
            focusBorderColor='red.400' />
            <InputRightElement 
            children=
            {<FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} />} 
            cursor='pointer'
            onClick={() => setIsPasswordShown(!isPasswordShown)}
            userSelect='none'
            />
          </InputGroup>
          <Button colorScheme='red' shadow='md'>
            Submit
          </Button>
          <Heading 
          as='p' 
          size='xs' 
          fontWeight={400} color='gray.500' paddingTop={1}>
              Don't have an account ? 
              <Link to='/register' className='underline'> Register</Link> 
          </Heading>
        </Stack>
      </Stack>
      <div className='bg-login-pattern'></div>
    </Flex>
  )
}

export default Login