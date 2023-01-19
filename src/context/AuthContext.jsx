import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../utils/Loader'
import { BackendUrl } from '../constants/Constants'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => localStorage.getItem('jwtTokens') ? jwt_decode(localStorage.getItem('jwtTokens')) : null)
    const [tokens, setTokens] = useState(() => localStorage.getItem('jwtTokens') ? JSON.parse(localStorage.getItem('jwtTokens')) : null)
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})
    const [address, setAddress] = useState({})

    const [snackbar, setSnackbar] = useState({ open: false, text: '' })

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()

        const url = `${BackendUrl}/api/token/`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': e.target.email.value,
                'password': e.target.password.value
            })
        })
        const data = await response.json()
        setTokens(data)
        console.log('Tokens', data, 'Reponse', response)
        if (response.status === 200) {
            setUser(jwt_decode(data.access))
            setTokens(data)
            localStorage.setItem('jwtTokens', JSON.stringify(data))
            navigate('/')
        }
        else if (response.status === 401) {
            setSnackbar({ open: true, text: data.detail })
        }
    }

    const registerUser = async (e) => {
        e.preventDefault()
        const url = `${BackendUrl}/api/register/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': e.target.email.value,
                'password': e.target.password.value
            })
        })

        const data = await response.json()
        navigate('/login')
    }

    const logoutUser = () => {
        setTokens(null)
        setUser(null)
        localStorage.removeItem('jwtTokens')
        navigate('/login')
    }

    const updateTokens = async () => {
        const url = `${BackendUrl}/api/token/refresh/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'refresh': tokens?.refresh
            })
        })
        const data = await response.json()
        if (response.status === 200) {
            setUser(jwt_decode(data.access))
            setTokens(data)
            localStorage.setItem('jwtTokens', JSON.stringify(data))
        } else if(response.status === 401){
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }

    const getUser = async () => {
        let url = `${BackendUrl}/api/user/`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            }
        })
        const data = await response.json()
        setUserData(data)
        
        if(loading){
            setLoading(false)
        }
    }

    const getShippingAddress = async () => {
        let url = `${BackendUrl}/api/getshippingaddress/`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            }
        })
        const data = await response.json()
        if(response.status === 200){
            setAddress(data)
        }

        if(loading){
            setLoading(false)
        }
    }

    const contextData = {
        snackbar: snackbar,
        setSnackbar: setSnackbar,

        loginUser: loginUser,
        registerUser: registerUser,
        logoutUser: logoutUser,

        getUser: getUser,
        userData: userData,
        
        user: user,
        tokens: tokens,

        getShippingAddress: getShippingAddress,
        address: address,
    }

    useEffect(() => {
        if(loading){
            updateTokens()
        }
        const fourMinutes = 1000 * 60 * 4
        const interval = setInterval(() => {
            if(tokens){
                updateTokens()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [loading, tokens])

    useEffect(() => {
        if(loading){
            getUser()
        }
    })

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <Loader text={'Fetching account details...'} /> : children}
        </AuthContext.Provider>
    )
}