import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

import { AccountSidebar } from '../components/Account/AccountSidebar'
import { AccountSettings } from '../components/Account/AccountSettings'
import ItemContext from '../context/ItemContext'

import { motion } from 'framer-motion'

export const Account = () => {

    const { userData, getUser } = useContext(AuthContext)
    const { getBasketItems, getBasket, getOrders } = useContext(ItemContext)

    useEffect(() => {
        getUser()
        getBasketItems()
        getBasket()
        getOrders()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="account-container text-stone-900">
            <div className="ac-wrapper md:p-10 p-4">
                <div className="ac-main_details flex gap-5 md:flex-row flex-col">
                    <div className="ac_sidebar md:w-1/4 md:h-[30rem] rounded-md">
                        <AccountSidebar userData={userData} />
                    </div>
                    <div className="ac_activities md:w-3/4 md:h-[30rem]">
                        <AccountSettings />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}