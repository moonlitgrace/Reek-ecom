import React from 'react'
import { Link } from 'react-router-dom'
import { BackendUrl } from '../../constants/Constants'

export const ItemCards = ({ item }) => {
    const truncate = (title) => {
        return title.length > 50 ? title.substring(0, 50) + ' ...' : title
    }
    return (
        <div className='card-container bg-white border-[1px] rounded-md overflow-hidden hover:shadow-lg duration-100'>
            <div className="card-item">
                <div className="card relative">
                    <div className="card-body ">
                        <div className="image">
                            <img className='h-[15rem] w-full object-cover' src={`${BackendUrl}${item.item_images[0].image}`} alt="" />
                        </div>
                        <div className="details p-3">
                            <div className="title">
                                <h4 className='text-md font-medium'>{truncate(item.title)}</h4>
                            </div>
                            <div className="price flex md:flex-row flex-col md:gap-5 gap-1 mt-3 w-full justify-between">
                                <div className="offer flex items-center gap-2">
                                    <span className='md:text-xl text-md font-bold flex items-center gap-2'>
                                        <span class="iconify text-green-800" data-icon="bxs:offer"></span>
                                        {item.discount}%
                                    </span> off
                                </div>
                                <div className="price-range flex gap-3 items-center">
                                    <div className="offer-price md:text-xl text-sm font-semibold">
                                        ₹ {item.offer_price}
                                    </div>
                                    <div className="real-price text-stone-500">
                                        <strike>₹ {item.real_price}</strike>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="options">
                                <button>Vew item</button>
                                <button>Save</button>
                            </div> */}
                        </div>
                    </div>
                    <Link to={`/item/${item.slug}`} className='absolute top-0 bottom-0 left-0 right-0'></Link>
                </div>
            </div>
        </div>
    )
}
