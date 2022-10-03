import { registerUser } from "../api/axios";
import {useMutation} from 'react-query'


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