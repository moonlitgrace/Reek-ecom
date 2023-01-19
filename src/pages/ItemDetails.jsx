import React, { useContext, useEffect, useState } from 'react'
import AboutItem from '../components/ItemDetails/AboutItem'
import SimilarItems from '../components/ItemDetails/SimilarItems'
import { ItemImages } from '../components/ItemDetails/ItemImages'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import ItemContext from '../context/ItemContext'

export const ItemDetails = () => {

    const { slug } = useParams()
    const { items } = useContext(ItemContext)

    const [item, setItem] = useState(items.find(item => item.slug === slug))
    useEffect(() => {
        setItem(items.find(item => item.slug === slug))
    }, [items, slug])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="item-container md:px-14 px-4 py-7">
            <div className="item-box flex gap-10 md:flex-row flex-col">
                <div className="images md:w-1/2">
                    <ItemImages item={item} />
                </div>
                <div className="item-detail md:w-1/2">
                    <AboutItem item={item} />
                </div>
            </div>
            <div className="similar-items mt-10">
                <SimilarItems item={item} />
            </div>
        </motion.div>
    )
}