import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchOptions = ({ items, setShowSearchMatch, searchRef }) => {

    const navigate = useNavigate()

    const truncate = (title) => {
        return title.length > 60 ? title.substring(0, 60) + ' ...' : title
    }
    const handleClick = (item) => {
        navigate(`/item/${item.slug}`)
        setShowSearchMatch(false)
    }

    return (
        <div className="search-options bg-stone-800 text-white rounded-b absolute w-[40rem] left-[25.8rem] overflow-hidden" ref={searchRef}>
            <div className="options ">
                {
                    items.map(item => (
                        <div className="option flex items-center gap-5 px-5 py-3 hover:bg-stone-700 cursor-pointer"
                            onClick={() => handleClick(item)}
                        >
                            <span class="iconify text-xl" data-icon="gg:search"></span>
                            <div className='flex flex-col'>
                                {truncate(item.title)}
                                <span className='text-sm text-stone-400'>in {item.category.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
