import React, { useContext } from 'react'
import './ProfileMenu.css'
import Profile from '../../assets/profile.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { AuthContext } from '../../context/AuthContext'
import { BackendUrl } from '../../constants/Constants'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const ProfileMenu = ({ menuOpen, setMenuOpen, menuRef, userData }) => {
  const navigate = useNavigate()
  const { logoutUser } = useContext(AuthContext)
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: 'translateY(100px)'
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0px)'
      }}
      exit={{
        opacity: 0,
        transform: 'translateY(10px)'
      }}
      className='main-menu absolute right-2 top-[5.2rem]'>
      <div className="container bg-stone-800 text-white rounded-lg w-[15rem] drop-shadow" ref={menuRef}>
        <div className="menu p-2">
          <Link to='/account'>
            <div className='flex items-center gap-4 hover:bg-stone-700 px-5 py-3 rounded-md cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
              <img src={`${BackendUrl}${userData.pic}`} className='rounded-full' width={45} alt="" />
              <h5>{userData.name}</h5>
            </div>
          </Link>
          <Divider sx={{ background: 'white', opacity: 0.2 }} />
          <div className='flex items-center gap-4 hover:bg-stone-700 px-5 py-2 rounded-md cursor-pointer focus:bg-slate-500' onClick={() => navigate('/basket')}>
            <span class="iconify text-xl opacity-75" data-icon="material-symbols:shopping-basket"></span>
            <h5>Your Basket</h5>
          </div>
          <HashLink to='/basket#saved' scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
            <div className='flex items-center gap-4 hover:bg-stone-700 px-5 py-2 rounded-md cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
              <span class="iconify text-xl opacity-75" data-icon="wpf:like"></span>
              <h5>Saved</h5>
            </div>
          </HashLink>
          <Divider sx={{ background: 'white', opacity: 0.2 }} />
          <div className='flex items-center gap-4 hover:bg-stone-700 px-5 py-2 rounded-md cursor-pointer' onClick={() => navigate('/account')}>
            <span class="iconify text-xl opacity-75" data-icon="material-symbols:settings"></span>
            <h5>Settings</h5>
          </div>
          <div className='flex items-center gap-4 hover:bg-stone-700 px-5 py-2 rounded-md cursor-pointer' onClick={logoutUser}>
            <span class="iconify text-xl opacity-75" data-icon="material-symbols:logout"></span>
            <h5>Logout</h5>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileMenu