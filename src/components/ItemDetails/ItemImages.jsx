import React, { useEffect, useState } from 'react'
import { BackendUrl } from '../../constants/Constants'

export const ItemImages = ({ item }) => {
    const [mainImage, setMainImage] = useState({})
    useEffect(() => {
        setMainImage(item.item_images[0])
    }, [item])
    return (
        <div className="images-container sticky top-28">
            <div className="images flex gap-3 ">
                <div className="sub-images w-[7rem]">
                    <figure className='flex flex-col gap-3'>
                        {
                            item.item_images?.map(image => (
                                <img key={image.id} className='rounded cursor-pointer' src={`${BackendUrl}${image.image}`} alt="Image" onClick={() => setMainImage(image)} />
                            ))
                        }
                    </figure>
                </div>
                <div className="main-image">
                    <img className='rounded' src={`${BackendUrl}${mainImage.image}`} alt="" />
                </div>
            </div>
        </div>
    )
}