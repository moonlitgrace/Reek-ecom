import React from 'react'

const ItemSizes = () => {
    return (
        <div className="item-sizes-container mt-3">
            <div className="item-sizes flex gap-2 items-center">
                <p>Select size :</p>
                <label className='cursor-pointer'>
                    <input type="radio" className='peer hidden' name='size' />
                    <div className="size1-container border w-max p-2 px-4 peer-checked:bg-stone-600 peer-checked:text-white rounded duration-100">
                        <h1>S</h1>
                    </div>
                </label>
                <label className='cursor-pointer'>
                    <input type="radio" className='peer hidden' name='size' />
                    <div className="size1-container border w-max p-2 px-4 peer-checked:bg-stone-600 peer-checked:text-white rounded duration-100">
                        <h1>M</h1>
                    </div>
                </label>
                <label className='cursor-pointer'>
                    <input type="radio" className='peer hidden' name='size' />
                    <div className="size1-container border w-max p-2 px-4 peer-checked:bg-stone-600 peer-checked:text-white rounded duration-100">
                        <h1>L</h1>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default ItemSizes