import { Alert, Checkbox, IconButton, Rating, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { FavoriteBorder, Favorite, Remove, Add } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import DeliveryIcon from '../../assets/delivery-van.png'
import HQualityIcon from '../../assets/high-quality.png'
import ReturnItemIcon from '../../assets/return-item.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { BackendUrl } from '../../constants/Constants'

const AboutItem = ({ item }) => {

    const { tokens } = useContext(AuthContext)
    const navigate = useNavigate()

    const [size, setSize] = useState('m')
    const [quantity, setQuantity] = useState(1)

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const handleQuantityMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleQuantityAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleAddBasket = async () => {
        let url = `${BackendUrl}/api/basket/add/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens.access)
            },
            body: JSON.stringify({
                'item_id': item.id,
                'size': size,
                'quantity': quantity
            })
        })

        const data = await response.json()

        if (response.status === 200) {
            navigate('/basket')
        }
    }

    const handleSaveItem = async () => {
        let url = `${BackendUrl}/api/saved/add/`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(tokens.access)
            },
            body: JSON.stringify({
                'item_id': item.id,
                'size': size,
                'quantity': quantity
            })
        })
        const data = await response.json()

        if (response.status === 200) {
            navigate('/basket#saved')
        }
    }

    return (
        <div className="about-item-container">
            <div className="about-item-box">
                <div className="about-item">
                    <div className="item-title">
                        <h2 className='text-2xl font-medium text-stone-800'>{item?.title}</h2>
                    </div>
                    <div className="item-stars flex items-center gap-2">
                        <Rating name="read-only" value={item?.rating} precision={0.5} max={5} readOnly />
                        <Typography className='text-stone-600' variant='body1'>{item?.rating} rating</Typography>
                    </div>
                    <div className="back-offers mt-3">
                        <p className='text-sm text-stone-600'>
                            <span className='font-semibold'>Bank Offer</span> Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account
                        </p>
                    </div>
                    <div className="item-avail-sizes flex items-center gap-2 mt-3">
                        <Typography variant='body1'>Select size: </Typography>
                        <ToggleButtonGroup
                            value={size}
                            exclusive
                            onChange={handleSizeChange}
                            aria-label="text alignment"
                        >
                            {
                                item.item_sizes[0].size_s ?
                                    <ToggleButton sx={{ paddingInline: 2.5 }} value="s">
                                        S
                                    </ToggleButton>
                                    :
                                    <ToggleButton sx={{ paddingInline: 2.5 }} value="s" disabled>
                                        S
                                    </ToggleButton>
                            }
                            {
                                item.item_sizes[0].size_m ?
                                    <ToggleButton sx={{ paddingInline: 2.5 }} value="m">
                                        M
                                    </ToggleButton>
                                    :
                                    <ToggleButton sx={{ paddingInline: 2.5 }} value="m" disabled>
                                        M
                                    </ToggleButton>
                            }
                            {
                                item.item_sizes[0].size_l ?
                                    <ToggleButton sx={{ paddingInline: 2.5 }} value="l">
                                        L
                                    </ToggleButton>
                                    :
                                    <ToggleButton sx={{ paddingInline: 2.5 }} value="l" disabled>
                                        L
                                    </ToggleButton>
                            }
                        </ToggleButtonGroup>
                    </div>
                    <div className="item-price flex flex-col mt-3">
                        <div className='flex gap-3 items-center'>
                            <div className="discount text-lg">
                                <h4>{item?.discount}% off</h4>
                            </div>
                            <div className="real-price text-stone-600">
                                <h4><strike>₹ {item?.real_price}</strike></h4>
                            </div>
                        </div>
                        <div className="offer-price text-3xl font-semibold">
                            <h3>₹ {item?.offer_price}</h3>
                        </div>
                    </div>
                    <div className="extras mt-5">
                        <Alert sx={{ width: '12rem' }} severity="success">Available : In stock</Alert>
                        <p className='mt-2 text-stone-700'>Free delivery for items above ₹ 499</p>
                        <div className="item-specials mt-3 border rounded flex justify-between items-center divide-x">
                            <div className="delivery-fea opacity-75 flex flex-col items-center gap-1 p-3 w-full">
                                <img className='w-[2rem]' src={DeliveryIcon} alt="" />
                                <h5 className='text-sm'>Delivery within 5 days</h5>
                            </div>
                            <div className="hquality-fea opacity-75 flex flex-col items-center gap-1 p-3 w-full">
                                <img className='w-[2rem]' src={HQualityIcon} alt="" />
                                <h5 className='text-sm'>Best quality assured</h5>
                            </div>
                            <div className="return-fea opacity-75 flex flex-col items-center gap-1 p-3 w-full">
                                <img className='w-[2rem]' src={ReturnItemIcon} alt="" />
                                <h5 className='text-sm'>7 days return available</h5>
                            </div>
                        </div>

                    </div>
                    <div className="options flex gap-5 mt-3 flex-col md:flex-row">
                        <div className="quantity-counter flex items-center md:gap-1">
                            <div className="minus">
                                <IconButton onClick={handleQuantityMinus}>
                                    <Remove />
                                </IconButton>
                            </div>
                            <div className="quant border px-5 py-2 rounded">
                                <span>{quantity}</span>
                            </div>
                            <div className="add">
                                <IconButton onClick={handleQuantityAdd}>
                                    <Add />
                                </IconButton>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleAddBasket} className='bg-stone-700 hover:bg-stone-800 duration-100 text-white p-2 px-5 font-medium rounded'>Add to basket</button>
                            <Checkbox onClick={handleSaveItem} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: '#292524' }} />} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                        </div>
                    </div>
                    <div className="description text-stone-600 mt-5">
                        <p className='text-stone-800 font-medium'>Description</p>
                        <p className='mt-2 whitespace-pre-line'>
                            {item?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutItem