
import React from 'react'
import Axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/api/register', {name, email, password})
        .then(res => {
            navigate('/login')
        })
        .catch(err => {
            setError(err.response.data)
        })
    }

    return (
        <div className='register'>
            <h1>Register</h1>
            <form action="">
                <input 
                    type="text" 
                    placeholder='name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
                <input 
                    type="text" 
                    placeholder='email' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />
                <input 
                    type="password" 
                    placeholder='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} />

                <button onClick={registerUser}>Submit</button>
                <h1 style={{color: 'red', fontSize: '20px'}}>{error}</h1>
            </form>
        </div>
    )
}

export default Register