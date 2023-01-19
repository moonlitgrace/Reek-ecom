import React, { createContext, useContext, useEffect, useState } from 'react'
import { Loader } from '../utils/Loader'
import { AuthContext } from './AuthContext'
import { BackendUrl } from '../constants/Constants'
import { Hidden } from '@mui/material'

const ItemContext = createContext()

export default ItemContext

export const ItemProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [cats, setCats] = useState([])
    const [basketItems, setBasketItems] = useState([])
    const [basket, setBasket] = useState({})
    const [savedItems, setSavedItems] = useState([])
    const [orders, setOrders] = useState([])

    const { tokens } = useContext(AuthContext)

    const getItems = async () => {
        const response = await fetch(`${BackendUrl}/api/items/`)
        const data = await response.json()
        console.log('items called', data)
        setItems(data)
        if(response.status === 200){
            setLoading(false)
        }
    }

    const getCats = async () => {
        const response = await fetch(`${BackendUrl}/api/categories/`)
        const data = await response.json()
        setCats(data)
        if(response.status === 200){
            setLoading(false)
        }
    }

    const getBasketItems = async () => {
        const response = await fetch(`${BackendUrl}/api/basketitems/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            setBasketItems(data)
            setLoading(false)
        }
    }

    const getBasket = async () => {
        let url = `${BackendUrl}/api/basket/`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            setBasket(data)
            setLoading(false)
        }
    }

    const getSavedItems = async () => {
        let url = `${BackendUrl}/api/saved/`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            }
        })

        const data = await response.json()

        if (response.status === 200) {
            setSavedItems(data)
        }
    }

    const getOrders = async () => {
        let url = `${BackendUrl}/api/orders/`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            }
        })
        const data = await response.json()
        if(response.status === 200){
            setOrders(data)
            setLoading(false)
        }
    }

    const contextData = {
        items: items,
        cats: cats,
        basket: basket,
        basketItems: basketItems,
        savedItems: savedItems,
        orders: orders,

        getBasket: getBasket,
        getBasketItems: getBasketItems,
        getSavedItems: getSavedItems,
        getOrders: getOrders,
    }

    useEffect(() => {
        if (loading) {
            getItems()
            getCats()
            getBasketItems()
            getBasket()
            getSavedItems()
            getOrders()
        }
    }, [loading])

    return (
        <ItemContext.Provider value={contextData}>
            {!loading && items.length > 0 && cats.length > 0 ? children : <Loader text={'Fetching items...'} />}
        </ItemContext.Provider>
    )
}