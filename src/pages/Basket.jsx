import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BasketItems from '../components/Basket/BasketItems'
import SavedItems from '../components/Basket/SavedItems'
import Summary from '../components/Basket/Summary'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import EmptyBasketIcon from '.././assets/empty-basket.png'
import { ArrowBack } from '@mui/icons-material'
import ItemContext from '../context/ItemContext'
import { AuthContext } from '../context/AuthContext'

const Basket = () => {

    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'REEK | Basket'
    })

    const { basketItems, savedItems, basket, getBasket, getSavedItems, getBasketItems } = useContext(ItemContext)
    const { getShippingAddress } = useContext(AuthContext)

    useEffect(() => {
        getBasket()
        getBasketItems()
        getShippingAddress()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="basket-container md:px-20 md:py-10 p-4">

                <div className='pb-5' id='basket'>
                    <div className='flex justify-between'>
                        <h2 className='md:text-3xl text-xl md:font-semibold font-medium'>Items in your Basket <span className='text-stone-500 md:text-2xl'>({basketItems?.length})</span></h2>
                        <button className='underline' onClick={() => navigate('/')}>Go back</button>
                    </div>
                    <div className="basket-box border rounded-md mt-3">
                        {
                            basketItems.length ?
                                <div className="basket-components flex md:flex-row flex-col justify-between h-full">
                                    <div className="basket md:w-2/3 md:px-5 md:py-5 p-3 h-full">
                                        <BasketItems
                                            basketItems={basketItems}
                                            getBasketItems={getBasketItems}
                                            getBasket={getBasket}
                                            getSavedItems={getSavedItems}
                                        />
                                    </div>
                                    <div className="summary md:w-1/3 h-full">
                                        <Summary
                                            basket={basket}
                                            basketItems={basketItems}
                                        />
                                    </div>
                                </div>
                                :
                                <div className="empty-container p-5 py-20">
                                    <div className="empty-box flex flex-col items-center justify-center">
                                        <img className='w-[13rem] h-[7rem] object-cover opacity-50' src={EmptyBasketIcon} alt="" />
                                        <h3 className='text-2xl mt-5 font-semibold'>Basket is Empty !</h3>
                                        <p className='text-md font-medium text-stone-600 text-center m-0'>There is no items in your basket <br />
                                            There is more exicting items in our site, check them out</p>
                                        <Link to='/' className='bg-stone-700 text-white p-2 px-5 rounded mt-5 hover:bg-stone-800 duration-100 flex items-center gap-2'>
                                            <ArrowBack />
                                            Continue Shopping</Link>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='my-7' id='saved'>
                    <h2 className='md:text-2xl text-xl font-medium text-stone-800'>Saved for later</h2>
                    <h4 className='md:text-lg text-sm text-stone-600'>{savedItems.length} items were saved for later</h4>
                    <div className="saved-box border rounded-md mt-3 md:w-2/3">
                        <div className="saved-components flex justify-between w-full">
                            <div className="saveditems md:px-5 md:py-5 p-3 w-full">
                                <SavedItems
                                    savedItems={savedItems}
                                    getSavedItems={getSavedItems}
                                    getBasketItems={getBasketItems}
                                    getBasket={getBasket}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Basket