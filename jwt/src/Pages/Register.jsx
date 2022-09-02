
import React from 'react'
import Axios from 'axios'
import {useState} from 'react'
import { isErrored } from 'stream'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const registerUser = async (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/api/register', {name, email, password})
        .then(res => setData(res.data))
        .catch(err => setError(err.response.data))
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
            </form>
        </div>
    )
}

export default Register