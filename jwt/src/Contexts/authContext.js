import React, {useState, useEffect, useContext, createContext} from 'react'
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)
 
export const AuthProvider = (props) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if(token){
            navigate('/private')
        }
    }, [])
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>    
    )

}