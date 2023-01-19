import { Dashboard, Edit, GitHub, Logout, PriorityHigh } from '@mui/icons-material'
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export const Sidebar = ({ activeTab, setActiveTab }) => {

    const { logoutUser } = useContext(AuthContext)

    return (
        <div className="sidebar-container ">
            <div className="sidebar ">
                <div className="sidebar-links md:text-md text-sm">
                    <div className="links-container font-medium flex flex-col items-start divide-y divide-stone-600">
                        <button className={`hover:bg-stone-600 duration-100 w-full text-start p-3 flex items-center gap-2 ${activeTab === 0 && 'bg-stone-600'}`}
                            onClick={() => setActiveTab(0)}
                        >
                            <Dashboard fontSize='small' />
                            Dashboard
                        </button>
                        <button className={`hover:bg-stone-600 duration-100 w-full text-start p-3 flex items-center gap-2 ${activeTab === 1 && 'bg-stone-600'}`}
                            onClick={() => setActiveTab(1)}
                        >
                            <Edit fontSize='small' />
                            Edit Profile
                        </button>
                        <button className='hover:bg-stone-600 duration-100 w-full text-start p-3 flex items-center gap-2'>
                            <GitHub fontSize='small' />
                            Github
                        </button>
                        <button onClick={logoutUser} className='hover:bg-stone-600 duration-100 w-full text-start p-3 flex items-center gap-2'>
                            <Logout fontSize='small' />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
