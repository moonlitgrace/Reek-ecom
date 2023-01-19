import React from 'react'

const OrderSummary = ({ basket, basketItems, formCompleted, handleCheckout }) => {
    
    return (
        <div className="summary-container bg-stone-50 rounded h-full py-5 px-5 border">
            <div className="summary-head">
                <h3 className='text-xl font-medium border-b pb-3'>Order Summary</h3>
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
            <button disabled={!formCompleted} onClick={handleCheckout} className='bg-stone-700 disabled:opacity-50 disabled:bg-stone-800 hover:bg-stone-800 duration-100 px-5 py-2 rounded text-white font-medium flex divide-x'>
                <div className='flex items-center gap-2 pr-3'>
                    Payment
                    <span class="iconify text-xl" data-icon="carbon:wireless-checkout"></span>
                </div>
                <div className='pl-3'>
                    ₹ {basket.total}
                </div>
            </button>
        </div>
    )
}

export default OrderSummary