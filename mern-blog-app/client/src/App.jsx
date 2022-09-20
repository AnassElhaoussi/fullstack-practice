import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register'

function App() {
  return (
      <div className='font-inter'>
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
