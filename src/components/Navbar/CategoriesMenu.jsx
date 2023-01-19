import React, { useContext, useState } from 'react'
import './CategoriesMenu.css'
import { motion } from "framer-motion"
import ItemContext from '../../context/ItemContext'
import { Link } from 'react-router-dom'

const CategoriesMenu = ({ setCatsOpen, catsRef }) => {

    const { cats } = useContext(ItemContext)
    return (
        <motion.div
            initial={{
                opacity: 0,
                transform: 'translateY(100px)'
            }}
            animate={{
                opacity: 1,
                transform: 'translateY(0px)'
            }}
            exit={{
                opacity: 0,
                transform: 'translateY(10px)'
            }}
            className='cats-menu' ref={catsRef}>
            <div className="container bg-stone-800 text-white p-2 rounded-lg w-[25rem] drop-shadow">
                <div className="menu flex justify-between">
                    <div className="left w-1/2">
                        <h4 className='px-5 py-4 text-lg font-semibold border-b border-stone-700 flex items-center gap-3'>
                            <span class="iconify" data-icon="carbon:collapse-categories"></span>
                            Categories
                        </h4>
                        <div className='mt-2'>
                            {
                                cats.slice(0, 5).map(cat => (
                                    <Link to={`/categories/${cat.slug}`}>
                                        <div className='flex items-center gap-2 rounded-md hover:bg-stone-700 px-5 py-2 cursor-pointer focus:bg-slate-500' onClick={() => setCatsOpen(false)}>
                                            <h5 className='flex flex-col'>{cat.title}</h5>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="right w-1/2">
                        <h4 className='px-5 py-4 text-lg font-semibold border-b border-stone-700 flex items-center gap-3'>
                            <span class="iconify" data-icon="ic:round-trending-up"></span>
                            Trending Now
                        </h4>
                        <div className='mt-2'>
                            {
                                cats.filter(cat => cat.rocking_now === true).map(cat => (
                                    <Link to={`/categories/${cat.slug}`}>
                                        <div className='flex items-center gap-2 rounded-md hover:bg-stone-700 px-5 py-2 cursor-pointer focus:bg-slate-500' onClick={() => setCatsOpen(false)}>
                                            <h5 className='flex flex-col'>{cat.title}</h5>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CategoriesMenu