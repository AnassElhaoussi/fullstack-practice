import { loginUser, registerUser } from "../api/axios";
import {useMutation} from 'react-query'


export const useLoginMutation = () => {
    const {isLoading, isError,
     error, data, mutate} = useMutation(loginUser)
    return {
        isLoading,
        isError,
        error: error.response.data,
        data,
        mutate
    }
}

export const useRegisterMutation = () => {
    const {isLoading, error,
    isError, mutate} = useMutation(newUser => registerUser(newUser))
    return {
        isLoading,
        isError,
        error: error?.response?.data,
        mutate
    }
}