import axios from 'axios'

const baseURL = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        timeout: 1000
    }
})

export const loginUser = async (username, email, password) => {
    return await baseURL.post('/login', {username, email, password})
}

export const registerUser = async (username, email, password) => {
    return await baseURL.post('/register',{username, email, password})

}