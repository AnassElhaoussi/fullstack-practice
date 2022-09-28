import axios from 'axios'

const baseURL = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        timeout: 1000
    }
})

export const loginUser = async () => {
    try {
        const response = await baseURL.post('/login')
        return response
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async () => {
    try {
        const response = await baseURL.post('/register')
        return response
    } catch(error) {
        console.log(error)
    }
}