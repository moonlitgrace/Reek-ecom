import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BackendUrl } from '../../constants/Constants'
import { AuthContext } from '../../context/AuthContext'

const BasketItem = ({ item, getBasketItems, getBasket, getSavedItems }) => {

    const { tokens } = useContext(AuthContext)

    const truncate = (title) => {
        return title.length > 55 ? title.substring(0, 50) + ' ...' : title
    }

    const handleRemoveItem = async () => {
        let url = `${BackendUrl}/api/basket/remove/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': parseInt(item.id)
            })
        })
        const data = await response.json()
        if (response.status === 200) {
            getBasketItems()
            getBasket()
        }
    }

    const handleSaveForLater = async () => {
        let url = `${BackendUrl}/api/saveforlater/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens.access)
            },
            body: JSON.stringify({
                'id': parseInt(item.id),
                'size': item.size,
                'quantity': item.quantity,
                'item_id': item.item.id
            })
        })
        const data = await response.json()

        if (response.status === 200) {
            getSavedItems()
            getBasketItems()
            getBasket()
        }
    }

    return (
        <div className='items grid grid-cols-7 py-3'>
            <div className="item-img-title flex flex-col md:flex-row md:col-span-4 col-span-7">
                <div className='grid grid-cols-7 gap-3 md:gap-0'>
                    <img width={100} className='rounded col-span-2 md:h-[5rem] w-[5rem] object-cover' src={`${BackendUrl}${item.item.item_images[0].image}`} alt="" />
                    <Link to={`/item/${item.item.slug}`} className='md:col-span-4 col-span-5'>
                        <h3 className='font-medium hover:underline cursor-pointer text-sm md:text-[16px]'>{truncate(item.item.title)}</h3>
                        <h4 className='text-stone-600'>Selected size : {item.size}</h4>
                    </Link>
                </div>
                <div className="mobile_view md:hidden grid grid-cols-7 w-full mt-2 text-sm gap-3 flex items-center">
                    <div className="quantity col-span-2">
                        <h3>Quantity: <br /> x {item.quantity}</h3>
                    </div>
                    <div className="price col-span-3">
                        <h3>Price: </h3>
                        <div className='flex gap-2'>
                            <h4 className='font-semibold'>₹ {item.total}</h4>
                            <h4 className='text-sm text-stone-500'><strike>₹ {item.item.real_price}</strike></h4>
                        </div>
                    </div>
                    <div className="options col-span-2 text-center">
                        <button onClick={handleRemoveItem} className='underline text-red-800 hover:text-red-900'>Remove</button>
                    </div>
                </div>
            </div>
            <div className="item-quantity hidden md:block">
                x {item.quantity}
            </div>
            <div className="item-price hidden md:block">
                <h4>₹ {item.total}</h4>
                <h4 className='text-sm text-stone-500'><strike>₹ {item.item.real_price}</strike></h4>
            </div>
            <div className="remove hidden md:block">
                <button onClick={handleRemoveItem} className='hover:underline text-red-800 hover:text-red-900'>Remove</button>
                <button onClick={handleSaveForLater} className='hover:underline'>Save for Later</button>
            </div>
        </div >
    )
}

export default BasketItem