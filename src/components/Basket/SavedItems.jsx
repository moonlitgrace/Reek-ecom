import React, { useEffect } from 'react'
import SavedItem from './SavedItem'
import EmptySavedIcon from '../../assets/empty-saved.png'

const SavedItems = ({ savedItems, getSavedItems, getBasketItems, getBasket }) => {

  useEffect(() => {
    getSavedItems()
  }, [])

  return (
    <div className="basketitems-container w-full">
      {
        savedItems.length ?
          <div className="basket-items-table">
            <div className="head-title text-stone-600 grid grid-cols-7 gap-5 w-full">
              <h4 className='md:col-span-4 col-span-7'>Item</h4>
              <h4 className='hidden md:block'>Quantity</h4>
              <h4 className='hidden md:block'>Price</h4>
              <h4 className='hidden md:block'>Options</h4>
            </div>
            <div className="basket-items divide-y">
              {
                savedItems.map(item => (
                  <SavedItem item={item} key={item.id} getSavedItems={getSavedItems} getBasketItems={getBasketItems} getBasket={getBasket} />
                ))
              }
            </div>
          </div>
          :
          <div className="empty-container w-full">
            <div className="empty-box flex flex-col items-center justify-center w-full">
              <img className='w-[7rem] object-cover opacity-50' src={EmptySavedIcon} alt="" />
              <h3 className='text-xl mt-5 font-medium'>Saved items is Empty !</h3>
              <p className='text-md font-normal text-stone-600 text-center m-0'>Add an item that you like the most for later</p>
            </div>
          </div>
      }
    </div>
  )
}

export default SavedItems