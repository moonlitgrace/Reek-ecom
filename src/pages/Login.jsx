import React, { useState } from 'react'
import BGImage from '.././assets/login-bg.jpg'
import Logo from '.././assets/reek-logo-dark.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Snackbar, Alert } from '@mui/material'

const Login = () => {

    const { loginUser, snackbar, setSnackbar } = useContext(AuthContext)

    const [passType, setPassType] = useState('password')

    const handleTogglePass = () => {
        if (passType === 'password') {
            setPassType('text')
        } else {
            setPassType('password')
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="login h-screen relative" style={{
                background: `url(${BGImage})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="login-container absolute right-0 bg-white top-0 bottom-0 flex items-center">
                <div className="login-box p-7 md:py-20 md:w-96 ">
                    <h3 className='text-xl font-semibold uppercase'>It's time to</h3>
                    <img className='mt-5' width={125} src={Logo} alt="Logo" />
                    <div className="form-wrapper mt-10">
                        <h4 className='text-lg mb-3 text-stone-600'>Login to continue</h4>
                        <form className='flex flex-col gap-2' onSubmit={loginUser}>
                            <div className="email relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100">
                                <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="material-symbols:alternate-email-rounded"></span>
                                <input type="email" name='email' required placeholder='Email address' className='border border-stone-300 p-2 px-10 outline-none rounded focus:border-stone-500 w-full duration-100' />
                            </div>
                            <div className="email relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100">
                                <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="material-symbols:lock"></span>
                                <input name='password' type={passType} required placeholder='Password' className='border border-stone-300 p-2 px-10 outline-none rounded focus:border-stone-500 w-full duration-100' />
                                <button type='button' className=' absolute right-0 mr-3 text-xl cursor-pointer' onClick={handleTogglePass}>
                                    <span class="iconify" data-icon="ri:eye-fill"></span>
                                </button>
                            </div>
                            <button className='bg-stone-700 rounded text-white font-medium p-2 mt-3 hover:bg-stone-800 duration-100'>LOGIN</button>
                        </form>
                    </div>
                    <p className='text-stone-500 mt-3'>Don't have an account ? <button className='text-stone-800'>
                        <Link to='/register'>Register now</Link>
                    </button></p>
                </div>
            </div>

            {/** snackbar */}
            <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar(false)}>
                <Alert onClose={() => setSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    {snackbar.text}
                </Alert>
            </Snackbar>
        </motion.div>
    )
}

export default Login