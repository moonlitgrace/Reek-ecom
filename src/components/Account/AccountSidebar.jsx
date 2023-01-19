import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BackendUrl } from '../../constants/Constants'
import { ShoppingBasket } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { AuthContext } from '../../context/AuthContext'

export const AccountSidebar = ({ userData }) => {

    const { logoutUser } = useContext(AuthContext)

    return (
        <div className="ac_sidebar_box">
            <div className="ac_image relative flex justify-center">
                <div className="ac_bg w-full h-[8rem] bg-stone-600 rounded-t-md overflow-hidden">
                    <img className='h-full w-full object-cover opacity-75' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEd5_PbXFmJMj9vmrbVAw57J4xPYeNGkHDw&usqp=CAU" alt="" />
                </div>
                <img className='rounded-full absolute -bottom-10 w-[6rem] ring-white ring-4' src={`${BackendUrl}${userData.pic}`} alt="" />
            </div>

            <div className="ac_details pt-16 p-3 border-b border-l border-r rounded-b-md">
                <h3 className='text-3xl font-bold'>{userData.name}</h3>
                <h4 className='text-lg'>{userData.email}</h4>

                <div className="phone flex items-center gap-3 mt-3">
                    <h4 className='text-sm text-stone-600'>Phone no:</h4>
                    <h3>{userData.phone ? <span>+91 {userData.phone}</span> : 'Not provided'}</h3>
                </div>
                <div className="ac_options mt-5 grid grid-cols-4 gap-3">
                    <div className="edit_profile_btn col-span-3">
                        <button onClick={logoutUser} className='w-full bg-stone-700 hover:bg-stone-800 duration-100 text-white p-2 rounded font-medium'>Logout</button>
                    </div>
                    <div className="basket_btn col-span-1">
                        <Tooltip title='Basket'>
                            <Link to='/basket'>
                                <button className='w-full p-2 rounded bg-stone-100 hover:bg-stone-200 duration-100'>
                                    <ShoppingBasket />
                                </button>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </div>

        </div>
    )
}
