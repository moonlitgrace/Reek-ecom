import React, { useContext, useState } from 'react'
import { BackendUrl } from '../../../../constants/Constants'
import { AuthContext } from '../../../../context/AuthContext'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const EditProfile = () => {

  const { userData, tokens, getUser } = useContext(AuthContext)

  const [userName, setUserName] = useState(userData.name)
  const [userEmail, setUserEmail] = useState(userData.email)
  const [userPhone, setUserPhone] = useState(userData.phone)

  const [snackOpen, setSnackOpen] = useState(false)

  const handleEditProfile = async (e) => {
    e.preventDefault()

    let url = `${BackendUrl}/api/editprofile/`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(tokens?.access)
      },
      body: JSON.stringify({
        'newName': userName,
        'newEmail': userEmail,
        'newPhone': userPhone
      })
    })
    const data = await response.json()
    if (response.status === 200) {
      setSnackOpen(true)
      getUser()
    }
  }

  return (
    <div
      className="edit_pro_container">
      <div className="edit_pro">
        <div className="header border-b pb-2">
          <h2 className='md:text-2xl text-md font-medium'>Hey {userData.name} ! Wanna edit your profile ?</h2>
          <h3 className='md:text-md text-sm opacity-75'>Go ahead ! it's simple...</h3>
        </div>
        <div className="form_wrapper mt-5">

          <form className='flex flex-col gap-3' onSubmit={handleEditProfile}>
            <div className='flex md:flex-row flex-col gap-5 justify-between'>

              <div className="name relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100">
                <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="ic:round-drive-file-rename-outline"></span>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} name='name' required placeholder='Your Name' className='border border-stone-300 p-2 md:px-10 pl-10 outline-none rounded focus:border-stone-500 w-full duration-100' />
              </div>

              <div className="phone relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100">
                <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="ic:baseline-local-phone"></span>
                <input type="number" value={userPhone} onChange={e => setUserPhone(e.target.value)} name='phone' required placeholder='Phone' className='border border-stone-300 p-2 md:px-10 pl-10 outline-none rounded focus:border-stone-500 w-full duration-100' />
              </div>

            </div>

            <div className="email relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100">
              <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="material-symbols:alternate-email-rounded"></span>
              <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} name='email' required placeholder='Email address' className='border border-stone-300 p-2 md:px-10 pl-10 outline-none rounded focus:border-stone-500 w-full duration-100' />
            </div>

            <button className='flex bg-stone-600 text-white p-2 w-max px-5 rounded font-medium hover:bg-stone-700 duration-100 flex items-center gap-2'>
              <span class="iconify text-xl" data-icon="charm:tick"></span>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Snackbar open={snackOpen} autoHideDuration={5000} onClose={() => setSnackOpen(false)}>
        <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
          Your Profile updated successfully !
        </Alert>
      </Snackbar>
    </div>
  )
}
