import React from "react"
import axios from "axios"
import { Navigate } from "react-router-dom"
import useToken from "../useToken"
import useUser from "../useUser"

export default function Logout() {
    const { token, setToken } = useToken();
    const { user, setUser } = useUser();

    axios.post('/api/logout', null, {
        baseURL: import.meta.env.VITE_API_ENDPOINT,
        headers: {
            'Accept': 'application/json',
            'Authorization': "Bearer " + useToken().token
        },
    }).then((resp: any) => {
        console.log(resp)

        setToken(null)
        setUser(null)
    }).catch((err: any) => {
        console.log(err)
    })

    return (
        <Navigate to="/" />
    )
}