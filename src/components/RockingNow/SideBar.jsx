import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useRef } from 'react'

const SideBar = ({
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    catsFilter,
    handleCatsChanged,
}) => {

    const progressRef = useRef(null);

    const max = 5000
    const min = 0
    const step = 100
    const priceCap = 600

    const handleMin = (e) => {
        if (maxPrice - minPrice >= priceCap && maxPrice <= max) {
            if (parseInt(e.target.value) > parseInt(maxPrice)) {
            } else {
                setMinPrice(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minPrice) {
                setMinPrice(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxPrice - minPrice >= priceCap && maxPrice <= max) {
            if (parseInt(e.target.value) < parseInt(minPrice)) {
            } else {
                setMaxPrice(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxPrice) {
                setMaxPrice(parseInt(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minPrice / max) * step + "%";
        progressRef.current.style.right = step - (maxPrice / max) * step + "%";
    }, [minPrice, maxPrice]);


    return (
        <div className="sidebar-container md:p-7 p-5">
            <div className="form-wrapper">
                <form>
                    <div className="categories pb-4">
                        <div className="title">
                            <h2 className='text-xl font-medium border-b py-2'>Categories</h2>
                        </div>
                        <div className="body flex flex-col gap-0 mt-5">
                            {
                                catsFilter.map(cat => (
                                    <FormGroup key={cat.id}>
                                        <FormControlLabel className='flex gap-1' label={cat.title} control={
                                            <Checkbox
                                                className='p-0 m-0'
                                                color='default'
                                                checked={cat.checked}
                                               
                                                onChange={() => handleCatsChanged(cat.id)}
                                            />
                                        } />
                                    </FormGroup>
                                ))
                            }
                        </div>
                    </div>
                    <div className="price-range border-t">
                        <div className="price-input">
                            <div className="flex justify-between items-center my-6 ">
                                <div className="rounded-md">
                                    <span className="p-2 font-medium"> Min</span>
                                    <input
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        type="number"
                                        value={minPrice}
                                        name='min_price'
                                        className="w-24 rounded p-2 px-5 border-[1px] outline-none focus:border-stone-800/25"
                                    />
                                </div>
                                <div className="ml-2 font-light text-lg"> - </div>
                                <div className=" ">
                                    <span className="p-2 font-medium"> Max</span>
                                    <input
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        type="number"
                                        value={maxPrice}
                                        name='max_price'
                                        className="w-24 rounded p-2 px-5 border-[1px] outline-none focus:border-stone-800/25"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="slider relative h-1 rounded-md bg-gray-300">
                                    <div
                                        className="progress absolute h-1 bg-stone-500 rounded "
                                        ref={progressRef}
                                    ></div>
                                </div>

                                <div className="range-input relative  ">
                                    <input
                                        onChange={handleMin}
                                        type="range"
                                        min={min}
                                        step={step}
                                        max={max}
                                        value={minPrice}
                                        className="range-min absolute w-full -top-1  h-1 bg-transparent appearance-none pointer-events-none"
                                    />

                                    <input
                                        onChange={handleMax}
                                        type="range"
                                        min={min}
                                        step={step}
                                        max={max}
                                        value={maxPrice}
                                        className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="filter-button mt-7">
                        <button className='bg-stone-700 hover:bg-stone-800 duration-100 text-white p-2 px-5 font-medium rounded flex items-center gap-2'>
                            <span class="iconify" data-icon="material-symbols:sort"></span>
                            Filter
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default SideBar