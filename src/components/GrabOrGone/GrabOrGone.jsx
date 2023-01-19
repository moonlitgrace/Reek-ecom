import React, { useContext, useState } from 'react'
import OfferCard from './OfferCard'
import ItemContext from '../../context/ItemContext';
import { useEffect } from 'react';

const GrabOrGone = ({gogRef}) => {

    const {items} = useContext(ItemContext)
    const [gogItems, setGogItems] = useState([])

    useEffect(() => {
        const priceSortedItems = items.sort((itema, itemb) => itemb.offer_price - itema.offer_price).slice(0, 4)
        const discountSorteditems = priceSortedItems.sort((item1, item2) => item2.discount - item1.discount)
        setGogItems(discountSorteditems)
    }, [items])
    return (
        <div ref={gogRef} className='md:px-20 px-4 pt-10 pb-5 text-stone-800' id='grab-or-gone'>
            <div className="gog-container">
                <div className="gog-head">
                    <div className="title flex items-center gap-3">
                        <span class="iconify text-4xl" data-icon="ic:baseline-local-offer"></span>
                        <h3 className='md:text-3xl text-2xl font-bold border-b-2 border-stone-800/50 pb-3'>Grab or Gone</h3>
                    </div>
                </div>
                <div className="gog-body mt-10">
                    <div className="gog-items grid md:grid-cols-4 grid-cols-2 gap-5">
                        {
                            gogItems.map(item => (
                                <OfferCard key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrabOrGone