import React from 'react'
import { BarLoader } from 'react-spinners'
import Logo from '.././assets/reek-logo-dark.png'
import { motion } from 'framer-motion'

export const Loader = ({ text }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="loader w-screen h-screen flex gap-3 flex-col items-center justify-center">
            <img src={Logo} width={100} />
            <BarLoader color="#2b3332" />
            <p className='text-sm'>{text}</p>
        </motion.div>
    )
}
