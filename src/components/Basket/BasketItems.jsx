import React from 'react'
import BasketItem from './BasketItem'

const BasketItems = ({ basketItems, getBasketItems, getBasket, getSavedItems }) => {
  return (
    <div className="basketitems-container w-full">
      <div className="basket-items-table">
        <div className="head-title text-stone-600 grid grid-cols-7 w-full">
          <h4 className='md:col-span-4 col-span-7'>Item</h4>
          <h4 className='hidden md:block'>Quantity</h4>
          <h4 className='hidden md:block'>Price</h4>
          <h4 className='hidden md:block'>Options</h4>
        </div>
        <div className="basket-items divide-y">
          {
            basketItems?.map(item => (
              <BasketItem key={item.id} item={item} getBasketItems={getBasketItems} getBasket={getBasket} getSavedItems={getSavedItems} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BasketItems