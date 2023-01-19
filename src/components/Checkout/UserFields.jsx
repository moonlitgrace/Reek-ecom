import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const UserFields = () => {

  const { userData } = useContext(AuthContext)

  return (
    <div className="user-fields-container">
      <div className="user-fields flex gap-3">
        <div className="email relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full">
          <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="icon-park-solid:edit-name"></span>
          <input value={userData.name} type="text" placeholder='Email address' className='border border-stone-300 p-2 md:px-10 pl-10 outline-none rounded focus:border-stone-500 w-full' />
        </div>
        <div className="phone relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full">
          <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="ic:baseline-local-phone"></span>
          <input value={userData.phone} type="number" placeholder='Phone' className='border border-stone-300 p-2 md:px-10 pl-10 outline-none rounded focus:border-stone-500 w-full' />
        </div>
      </div>
    </div>
  )
}

export default UserFields