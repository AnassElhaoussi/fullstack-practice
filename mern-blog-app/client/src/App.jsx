import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register'
import {ChakraProvider} from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  }
})

function App(){
  return (
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
  )
}

export default App
