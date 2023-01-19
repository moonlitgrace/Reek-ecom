import { LocalShipping, ShoppingBasket } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BackendUrl } from '../../../../constants/Constants'
import ItemContext from '../../../../context/ItemContext'

export const Dashboard = () => {

    const { basketItems, orders } = useContext(ItemContext)

    const truncate = (title) => {
        return title.length > 30 ? title.substring(0, 30) + ' ...' : title
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard flex gap-5 md:flex-row flex-col">
                <div className="order_items md:w-1/2">
                    <h3 className='md:text-xl text-md font-medium border-b-2 w-max pb-1'>Your Orders</h3>
                    <div className="orders">
                        {
                            orders.length > 0 ?
                                <div className="items">
                                    <div className="item divide-y">
                                        {
                                            orders?.map(item => (
                                                <div className="item py-2" key={item.id}>
                                                    <div className="item_container grid grid-cols-5 gap-2">
                                                        <div className="item_image col-span-1">
                                                            <img className='w-14 h-14 object-cover rounded' src={`${BackendUrl}${item.item.item_images[0].image}`} alt="" />
                                                        </div>
                                                        <div className="item_details col-span-4">
                                                            <Link to={`/item/${item.item.slug}`}>
                                                                <h3 className='text-sm hover:underline'>{truncate(item.item.title)}</h3>
                                                            </Link>
                                                            <div className="price flex items-center gap-2">
                                                                <h2>₹ {item.item.offer_price}</h2>
                                                                <h3 className='text-sm text-stone-400'><strike>{item.item.real_price}</strike></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                :
                                <div className="empty">
                                    <div className="empty-box flex flex-col text-start mt-5">
                                        <LocalShipping fontSize='large' sx={{ opacity: 0.5 }} />
                                        <h3 className='text-xl font-semibold'>No Orders found !</h3>
                                        <p className='text-md font-medium text-stone-600'>Currenty your order list is empty !</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="items_basket md:w-1/2">
                    <h3 className='md:text-xl text-md font-medium border-b-2 w-max pb-1'>Items in your Basket</h3>
                    {
                        basketItems.length > 0 ?
                            <div className="items mt-5 flex flex-col divide-y">
                                {
                                    basketItems?.map(item => (
                                        <div className="item py-2" key={item.id}>
                                            <div className="item_container grid grid-cols-5 gap-2">
                                                <div className="item_image col-span-1">
                                                    <img className='w-14 h-14 object-cover rounded' src={`${BackendUrl}${item.item.item_images[0].image}`} alt="" />
                                                </div>
                                                <div className="item_details col-span-4">
                                                    <Link to={`/item/${item.item.slug}`}>
                                                        <h3 className='text-sm hover:underline'>{truncate(item.item.title)}</h3>
                                                    </Link>
                                                    <div className="price flex items-center gap-2">
                                                        <h2>₹ {item.item.offer_price}</h2>
                                                        <h3 className='text-sm text-stone-400'><strike>{item.item.real_price}</strike></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <Link to='/basket' className='md:text-md text-sm p-2 bg-stone-600/90 hover:bg-stone-600 text-white rounded flex items-center gap-2 justify-center font-medium duration-100'>
                                    <ShoppingBasket fontSize='small' />
                                    Go to Basket
                                </Link>
                            </div>
                            :
                            <div className="empty">
                                <div className="empty-box flex flex-col text-start mt-5">
                                    <ShoppingBasket fontSize='large' sx={{ opacity: 0.5 }} />
                                    <h3 className='text-xl font-semibold'>Basket is Empty !</h3>
                                    <p className='text-md font-medium text-stone-600'>There is no items in your basket</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
