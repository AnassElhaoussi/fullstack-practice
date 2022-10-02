import axios from 'axios'

const baseURL = axios.create({
    baseURL: 'http://localhost:5000'
})

export const loginUser = async (username, email, password) => {
    return await baseURL.post('/login', 
    {username, email, password})
}

export const registerUser = async (user) => {
    await baseURL.post('/register', user)
    location.href = '/login'
}