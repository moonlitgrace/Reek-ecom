import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddressFields from '../components/Checkout/AddressFields'
import OrderSummary from '../components/Checkout/OrderSummary'
import UserFields from '../components/Checkout/UserFields'
import { motion } from 'framer-motion'
import ItemContext from '../context/ItemContext'
import { AuthContext } from '../context/AuthContext'
import { BackendUrl } from '../constants/Constants'

const Checkout = () => {

    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'REEK | Checkout'
    })

    const { basketItems, basket } = useContext(ItemContext)
    const { address, tokens } = useContext(AuthContext)
    const [formCompleted, setFormCompleted] = useState(false)

    const [address1, setAddress1] = useState(address.address ? address.address : '')
    const [address2, setAddress2] = useState(address.address2 ? address.address2 : '')
    const [city, setCity] = useState(address.city ? address.city : '')
    const [landmark, setLandmark] = useState(address.landmark ? address.landmark : '')
    const [zipcode, setZipcode] = useState(address.zipcode ? address.zipcode : '')

    const handleCheckout = async () => {
        let url = `${BackendUrl}/api/checkout/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens?.access)
            },
            body: JSON.stringify({
                'address1': address1,
                'address2': address2,
                'city': city,
                'landmark': landmark,
                'zipcode': zipcode

            })
        })
        const data = await response.json()
        if(response.status === 200){
            navigate('/order-success')
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='checkout-container md:px-20 md:py-10 p-4 relative'>
            <div className="check-head" id='checkout'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold'>Checkout</h2>
                        <p className='text-stone-700'>Please fill the fields to continue</p>
                    </div>
                    <button className='underline' onClick={() => navigate('/basket')}>Go back</button>
                </div>
            </div>
            <div className='flex md:flex-row flex-col mt-7 md:gap-0 gap-10'>
                <div className="checkout-box md:w-2/3">
                    <div className="check-body md:w-3/4">
                        <div className="form-wrapper">
                            <form >
                                <div className="user">
                                    <UserFields />
                                </div>
                                <div className="address mt-2">
                                    <AddressFields setFormCompleted={setFormCompleted}
                                        address1={address1}
                                        setAddress1={setAddress1}
                                        address2={address2}
                                        setAddress2={setAddress2}
                                        city={city}
                                        setCity={setCity}
                                        landmark={landmark}
                                        setLandmark={setLandmark}
                                        zipcode={zipcode}
                                        setZipcode={setZipcode}
                                    />
                                    <p className='text-stone-700 mt-2'>Shipping address will be saved for the next order.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="summary-box md:w-1/3">
                    <OrderSummary basket={basket} basketItems={basketItems} formCompleted={formCompleted} handleCheckout={handleCheckout} />
                </div>
            </div>
        </motion.div>
    )
}

export default Checkout