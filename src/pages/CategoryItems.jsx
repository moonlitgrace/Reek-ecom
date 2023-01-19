import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCards } from '../components/CategoryItems/ItemCards'
import { BackendUrl } from '../constants/Constants'
import { motion } from 'framer-motion'

export const CategoryItems = () => {

  const { slug } = useParams()
  const [items, setItems] = useState([])

  const getCatitems = async () => {
    let url = `${BackendUrl}/api/categories/${slug}/`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (response.status === 200) {
      setItems(data)
    }
  }

  useEffect(() => {
    getCatitems()
  }, [slug])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='cat-items-container px-20 py-10'>
      <div className="header border-b w-max pb-2">
        <h3 className='text-2xl'>Showing results for <span className='font-bold'>{slug}</span></h3>
      </div>
      <div className="catitems-body mt-5">
        <div className="catitems grid md:grid-cols-4 grid-cols-2 gap-5">
          {
            items.length > 0 ?
              items.map(item => (
                <ItemCards key={item.id} item={item} />
              ))
              :
              <h3>Loading...</h3>
          }
        </div>
      </div>
    </motion.div>
  )
}
