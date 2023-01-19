import React, { useEffect, useState } from 'react'

const AddressFields = ({
    setFormCompleted,
    address1,
    setAddress1,
    address2,
    setAddress2,
    city,
    setCity,
    landmark,
    setLandmark,
    zipcode,
    setZipcode,
}) => {

    useEffect(() => {
        if (address1 && address2 && city && landmark && zipcode) {
            setFormCompleted(true)
        } else {
            setFormCompleted(false)
        }
    }, [address1, address2, city, landmark, zipcode])

    return (

        <div className="adf-container">
            <div className="adf-fields">
                <div className="address-box flex flex-col">
                    <label>Shipping Address</label>
                    <div className='relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full'>
                        <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="mdi:address-marker"></span>
                        <input value={address1} onChange={e => setAddress1(e.target.value)} type="text" placeholder='Address 1' className='border border-stone-300 p-2  md:px-10 pl-10 outline-none rounded focus:border-stone-500 w-full' />
                    </div>
                </div>
                <div className="address-2-city flex md:flex-row flex-col gap-3 mt-3">
                    <div className="landmark flex flex-col md:w-2/4">
                        <label>Address 2</label>
                        <div className='relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full'>
                            <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="mdi:address-marker"></span>
                            <input value={address2} onChange={e => setAddress2(e.target.value)} type="text" placeholder='Alternate address' className='border border-stone-300 p-2 pl-10 pr-0 outline-none rounded focus:border-stone-500 w-full' />
                        </div>
                    </div>
                    <div className="zipcode flex flex-col md:w-2/4">
                        <label>City</label>
                        <div className='relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full'>
                            <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="mdi:address-marker"></span>
                            <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder='City' className='border border-stone-300 p-2 pl-10 pr-0 outline-none rounded focus:border-stone-500 w-full' />
                        </div>
                    </div>
                </div>
                <div className="landmark-zip flex gap-3 mt-3">
                    <div className="landmark flex flex-col w-2/3">
                        <label>Landmark</label>
                        <div className='relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full'>
                            <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="entypo:address"></span>
                            <input value={landmark} onChange={e => setLandmark(e.target.value)} type="text" placeholder='Popular place near your address' className='border border-stone-300 p-2 pl-10 pr-0 outline-none rounded focus:border-stone-500 w-full' />
                        </div>
                    </div>
                    <div className="zipcode flex flex-col w-1/3">
                        <label>Zipcode</label>
                        <div className='relative flex items-center text-stone-600 focus-within:text-stone-800 duration-100 w-full'>
                            <span class="iconify text-xl absolute ml-3 pointer-events-none" data-icon="fluent-mdl2:input-address"></span>
                            <input value={zipcode} onChange={e => setZipcode(e.target.value)} type="number" placeholder='Zipcode' className='border border-stone-300 p-2 pl-10 pr-0 outline-none rounded focus:border-stone-500 w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressFields