import React, { useContext, useEffect, useState } from 'react'
import ItemContext from '../../context/ItemContext';
import ItemCard from './ItemCard';
import './RockingNow.css'
import SideBar from './SideBar';
import EmptyIcon from '../../assets/empty-icon.png'
import { motion, AnimatePresence } from 'framer-motion';

export const RockingNow = ({ rockingRef }) => {

  const { items, cats } = useContext(ItemContext)

  const [list, setList] = useState([])
  const [catsFilter, setCatsFitler] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [resultsFound, setResultsFound] = useState(true)

  useEffect(() => {
    setCatsFitler(cats.map(cat => ({ ...cat, checked: false })))
    setList(items)
  }, [cats, items])

  const handleCatsChanged = (id) => {
    const catsList = catsFilter
    const changeCheckedCats = catsList.map(cat => cat.id === id ? { ...cat, checked: !cat.checked } : cat)
    setCatsFitler(changeCheckedCats)
  }

  const applyFilter = () => {

    let updatedItems = items

    // Cats filter
    const checkedCats = catsFilter.filter(cat => cat.checked)
    if (checkedCats.length) {
      updatedItems = updatedItems.filter(item => checkedCats.some(cat => cat.id === item.category.id))
    }

    // Price filter
    updatedItems = updatedItems.filter(item =>
      item.offer_price >= minPrice && item.offer_price <= maxPrice
    )

    setList(updatedItems)

    !updatedItems.length ? setResultsFound(false) : setResultsFound(true)

  }

  useEffect(() => {
    applyFilter()
    console.log('Max', maxPrice)
  }, [minPrice, maxPrice, catsFilter])

  return (
    <div ref={rockingRef}>
      <div className="rock-container md:px-20 px-4 pt-5 mb-20 text-stone-800" id='rocking'>

        {/* Head section */}
        <div className="rock-head">
          <div className="title flex items-center gap-3">
            <span class="iconify text-xl" data-icon="ph:trend-up-fill"></span>
            <h3 className='md:text-3xl text-2xl font-bold border-b-2 border-stone-800/50 pb-3'>Rocking Items</h3>
          </div>
        </div>

        {/* Body section */}
        <div className="rock-body flex md:flex-row flex-col mt-10 gap-10">
          <div className="sidebar md:w-1/3 rounded-md border-[1px]">

            <div className="sidebar-container sticky top-20">
              <SideBar
                catsFilter={catsFilter}
                handleCatsChanged={handleCatsChanged}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
            </div>

          </div>
          <div className="items-or-empty md:w-2/3 flex flex-col gap-5">
            {
              resultsFound ?

                <motion.div className="items-list grid md:grid-cols-3 grid-cols-2 gap-5">
                  <AnimatePresence>
                    {
                      list.map(item => (
                        <ItemCard key={item.id} item={item} />
                      ))
                    }
                  </AnimatePresence>
                </motion.div>
                :
                <div
                  className="empty flex flex-col justify-center items-center">
                  <img className='w-[20rem] rounded' src={EmptyIcon} alt="" />
                  <h2 className='text-xl font-semibold'>No results found</h2>
                  <h3 className='text-lg'>We couldn't find what you're looking for</h3>
                  <p className='text-stone-500'>Try changing filter configurations</p>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}