import React from 'react'
import { Link } from 'react-router-dom'
import SuccessIcon from '.././assets/order-success.jpg'
import { motion } from 'framer-motion'

export const OrderSuccess = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="order-success-container w-screen h-screen flex items-center justify-center md:p-0 p-5">
            <div className="order-success flex items-center md:flex-row flex-col">
                <div className="order-details text-stone-800">
                    <h2 className='md:text-2xl text-xl font-semibold mb-2'>Thank you !</h2>
                    <h2 className='md:text-4xl text-3xl font-bold'>Your order has been placed <br /> Successfully !</h2>
                    <h4 className='mt-2 md:text-lg text-sm'>We'll send you a confirmation mail with order details soon</h4>

                    <div className="links mt-10">
                        <h2 className='md:text-lg text-sm font-medium'>There are more items waiting for you</h2>
                        <div className='flex gap-5 items-center'>
                            <Link to='/'>
                                <button className='text-white bg-stone-700 hover:bg-stone-800 duration-100 p-2 px-10 font-medium rounded-md md:mt-1 mt-3'>Done</button>
                            </Link>
                            <Link to='/basket'>
                                <button className='underline'>Basket</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="order-illustraion">
                    <img src={SuccessIcon} className='w-[30rem]' alt="" />
                </div>
            </div>
        </motion.div>
    )
}
