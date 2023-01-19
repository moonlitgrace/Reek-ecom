import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../../assets/reek-logo-light.png'
import './Header.css'
import ProfileMenu from './ProfileMenu'
import CategoriesMenu from './CategoriesMenu'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { IconButton, Tooltip } from '@mui/material'
import { Favorite, ShoppingBasket } from '@mui/icons-material'
import { AuthContext } from '../../context/AuthContext'
import ItemContext from '../../context/ItemContext'
import { SearchOptions } from './SearchOptions'
import { BackendUrl } from '../../constants/Constants'

const Header = () => {

   const { user, userData, getUser } = useContext(AuthContext)
   const { items } = useContext(ItemContext)

   const [menuOpen, setMenuOpen] = useState(false)
   const [catsOpen, setCatsOpen] = useState(false)

   const [itemMatch, setItemMatch] = useState([])
   const [showSearchMatch, setShowSearchMatch] = useState(false)

   const catsRef = useRef()
   const menuRef = useRef()
   const profileImgRef = useRef()
   const catsTextRef = useRef()
   const searchRef = useRef()

   useEffect(() => {
      window.addEventListener('mousedown', (e) => {
         if (e.target !== profileImgRef.current && e.target !== menuRef.current && e.target !== catsTextRef.current && e.target !== catsRef.current) {
            setMenuOpen(false)
            setCatsOpen(false)
         }
      })
   })

   useEffect(() => {
      window.addEventListener('mousedown', (e) => {
         if (showSearchMatch && !searchRef.current.contains(e.target)) {
            setShowSearchMatch(false)
         }
      })
   })

   const searchItems = (query) => {
      if (!query) {
         setShowSearchMatch(false)
         setItemMatch([])
         console.log('ItemMatch', itemMatch)
      } else {
         let matches = items.filter(item => {
            const regex = new RegExp(`${query}`, 'gi')
            return item.title.match(regex) || item.category.title.match(regex)
         })
         setItemMatch(matches.slice(0, 5))
         setShowSearchMatch(true)
      }
   }

   useEffect(() => {
      getUser()
   }, [])

   return (
      <div className='sticky top-0 z-40'>
         <header className='bg-stone-800 px-5 py-3'>
            <div className="flex justify-between items-center">
               <div className='flex items-center gap-10'>
                  <div className="logo">
                     <Link to='/'>
                        <img width={100} src={Logo} alt="" />
                     </Link>
                  </div>
                  <div className='md:flex hidden items-center gap-2 ' onClick={() => setCatsOpen(!catsOpen)}>
                     <h6 className='text-md text-white/90 cursor-pointer hover:text-white ' ref={catsTextRef}>Categories</h6>
                     <span class="iconify text-white/90" data-icon="material-symbols:arrow-drop-down"></span>
                  </div>
               </div>
               <div className='hidden md:block'>
                  <form onSubmit={(e) => handleSearch(search, e)}>
                     <div className='relative flex items-center focus-within:text-white text-white/75'>
                        <span class="iconify absolute left-5 text-2xl pointer-events-none" data-icon="gg:search"></span>
                        <input onClick={() => setShowSearchMatch(true)} onChange={(e) => searchItems(e.target.value)} className='outline-none px-5 pl-16 py-3 text-md w-[40rem] rounded bg-white/25 focus:bg-white/30 text-white search-input duration-100 ease-in-out' type="text" placeholder='Search for brands cloths trends etc ...' />
                     </div>
                  </form>
               </div>
               {
                  user ?
                     <div className='flex gap-2'>
                        <Tooltip title='Saved'>
                           <IconButton>
                              <HashLink to='/basket#saved' scroll={(el) => el.scrollIntoView({ block: 'center', behavior: 'smooth' })}>
                                 <Favorite className='text-white/90 hover:text-white text-2xl' />
                              </HashLink>
                           </IconButton>
                        </Tooltip>
                        <Tooltip title='Basket'>
                           <IconButton>
                              <HashLink to='/basket' scroll={(el) => el.scrollIntoView({ block: 'center', behavior: 'smooth' })}>
                                 <ShoppingBasket className='text-white/90 hover:text-white text-2xl' />
                              </HashLink>
                           </IconButton>
                        </Tooltip>
                        {
                           userData ?
                              <Tooltip title='Profile'>
                                 <button className='text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
                                    <img width={35} className='rounded-full' ref={profileImgRef} src={`${BackendUrl}${userData.pic}`} alt="" />
                                 </button>
                              </Tooltip>
                              : 
                              <h3>Loading...</h3>
                        }
                     </div>
                     :
                     <Link to='/login' className='text-white hover:underline'>Login / Register</Link>
               }
            </div>
         </header>
         <AnimatePresence>
            {menuOpen && <ProfileMenu menuRef={menuRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} userData={userData} />}
            {catsOpen && <CategoriesMenu catsRef={catsRef} setCatsOpen={setCatsOpen} />}
         </AnimatePresence>
         {itemMatch.length > 0 && showSearchMatch && <SearchOptions items={itemMatch} setShowSearchMatch={setShowSearchMatch} searchRef={searchRef} />}
      </div>
   )
}

export default Header