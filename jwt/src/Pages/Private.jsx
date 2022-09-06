import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

export default function Private(){
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/api/private', {
            headers: {
                'x-access-token': !token ? "" : token
            }
        }).then((res) => {
            setData(JSON.stringify(res.data, null, 2))
        })
        .catch((error) => {
            navigate('/')
        })
    }, [])

    
    const logoutUser = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <h1>Very private route!</h1>
            <div>
                <h1>Your credentials : </h1>
                {data}
            </div>
        
            <button onClick={logoutUser}>Logout</button>
           
        </div>
    )
}
