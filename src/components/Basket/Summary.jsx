import React from 'react'
import { useNavigate } from 'react-router-dom'

const Summary = ({ basket, basketItems }) => {
    const navigate = useNavigate()
    return (
        <div className="summary-container bg-stone-50 rounded-r-lg h-auto py-5 px-5 border-l">
            <div className="summary-head">
                <h3 className='text-xl font-medium border-b pb-3'>Summary</h3>
            </div>
            <div className="summary-body flex justify-between py-3">
                <div className="keys flex flex-col gap-2">
                    <h4>Total items :</h4>
                    <h4>Total price :</h4>
                    <h4>Discount :</h4>
                    <h4>Discounted price :</h4>
                    <h2 className='text-xl font-medium'>Total :</h2>
                </div>
                <div className="right text-end flex flex-col gap-2">
                    <h4>{basketItems.length}</h4>
                    <h4>₹ {basket.total_price}</h4>
                    <h4>{basket.discount}%</h4>
                    <h4>- ₹ {basket.discount_price}</h4>
                    <h2 className='text-xl font-medium'>₹ {basket.total}</h2>   
                </div>
            </div>
            <button className='bg-stone-700 hover:bg-stone-800 duration-100 px-5 py-2 rounded text-white font-medium flex items-center gap-2'
                onClick={() => navigate('/checkout')}
            >
                Checkout
                <span class="iconify text-xl" data-icon="carbon:wireless-checkout"></span>
            </button>
        </div>
    )
}

export default Summary