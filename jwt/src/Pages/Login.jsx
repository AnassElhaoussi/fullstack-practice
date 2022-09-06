
import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate  = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/api/login', {name, email, password})
        .then((res) => {
            localStorage.setItem('token', res.data)
        })
        .catch((err) => {
            setError(err.response.data)
        })
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <form action="">
                <input 
                    type='text' 
                    placeholder='username' 
                    value={name} 
                    onChange={e => setName(e.target.value)} />
                <input 
                    type="text" 
                    placeholder='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button onClick={loginUser}>Submit</button>
            </form>
            <h1 style={{color: 'red', fontSize: '20px'}}>{error}</h1>
        </div>
    )
}

export default Login