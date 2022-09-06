import React, {useEffect} from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Private from './Pages/Private'
import {useNavigate} from 'react-router-dom'
import {AuthProvider} from './Contexts/authContext'

export default function App() {

    return (
        <div className='container'>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/private' element={<Private />} />
                </Routes>
            </AuthProvider>
        </div>
    )
}