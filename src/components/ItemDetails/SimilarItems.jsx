import React, { useContext } from 'react'
import SimilarCard from './SimilarCard'
import ItemContext from '../../context/ItemContext'
import { useState } from 'react'
import { useEffect } from 'react'

const SimilarItems = ({ item }) => {
  const { items } = useContext(ItemContext)
  const [similarItems, setSimilarItems] = useState([])
  useEffect(() => {
    const filteredItems = items.filter(filter_item => filter_item.category.id === item.category.id && filter_item !== item).slice(0, 4)
    setSimilarItems(filteredItems)
  }, [items])
  return (
    <div className="similar-container">
      <div className="similar-items">
        <h2 className='text-2xl font-semibold'>Similar items</h2>
      </div>
      <div className="similar-items-card grid md:grid-cols-4 grid-cols-2 mt-5 md:gap-5 gap-3">
        {
          similarItems.map(s_item => (
            <SimilarCard key={s_item.id} item={s_item} />
          ))
        }
      </div>
    </div>
  )
}

export default SimilarItems