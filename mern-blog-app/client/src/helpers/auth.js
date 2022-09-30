import { loginUser, registerUser } from "../api/axios";
import {useMutation, useQueryClient, useQuery} from 'react-query'


export const useLoginMutation = () => {
    const {isLoading, isError, error, data, mutate} = useMutation(loginUser)
    return {
        isLoading,
        isError,
        error,
        data,
        mutate
    }
}

export const useRegisterMutation = () => {
    const queryClient = useQueryClient()
    const {isLoading, error, isError, mutate} = useMutation(registerUser)
    return {
        isLoading,
         isError,
         error,
           mutate
    }
}