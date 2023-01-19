import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BackendUrl } from '../../constants/Constants'

const ItemCard = ({ item }) => {

    const truncate = (title) => {
        return title.length > 55 ? title.substring(0, 50) + ' ...' : title
    }
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='card-container bg-white border-[1px] rounded-md overflow-hidden hover:shadow-lg duration-100'>
            <div className="card-item">
                <div className="card relative">
                    <div className="card-body ">
                        <div className="image">
                            <img className='md:h-[15rem] h-[10rem] w-full object-cover' src={`${BackendUrl}${item.item_images[0].image}`} alt="" />
                        </div>
                        <div className="details md:p-3 p-2">
                            <div className="title">
                                <h4 className='md:text-md text-sm font-medium'>{truncate(item.title)}</h4>
                            </div>
                            <div className="price flex md:flex-row flex-col md:gap-5 gap-1 mt-3 w-full justify-between">
                                <div className="price-range flex gap-3 items-center">
                                    <div className="offer-price md:text-xl text-sm font-semibold">
                                        ₹ {item.offer_price}
                                    </div>
                                    <div className="real-price text-stone-500 hidden md:block">
                                        <strike>₹ {item.real_price}</strike>
                                    </div>
                                    <div className="discount">
                                        <h4>{item.discount}% off</h4>
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
        </motion.div>
    )
}

export default ItemCard