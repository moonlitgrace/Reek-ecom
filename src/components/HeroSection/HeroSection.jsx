import React, { useRef } from 'react'
import BGImage from '../../assets/hero-bg.jpg'
import Logo from '../../assets/reek-logo-dark.png'

const HeroSection = ({rockingRef}) => {

    return (
        <div className='h-[30rem] flex items-center px-4 md:px-20' style={{
            background: `url(${BGImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="hero-container">
                <div className="hero-text text-stone-900">
                    <h3 className='md:text-4xl text-xl font-extrabold uppercase'>Get Ready to Rock with</h3>
                    <h1 className='hidden'>REEK</h1>
                    <img className='mt-5 w-40 md:w-72' src={Logo} alt="Logo" />
                    <h4 className='mt-5 md:text-xl text-sm md:w-full w-48 font-semibold uppercase text-stone-800'>Best Online clothing store for Men's</h4>

                    <div className='mt-10'>
                        <button className='text-white hover:px-7 p-3 px-5 rounded-full md:text-md text-sm font-semibold uppercase bg-stone-700 hover:bg-stone-800 duration-200 flex items-center gap-2'
                            onClick={() => rockingRef.current.scrollIntoView({behavior:"smooth"})}
                        >
                            Get Started
                            <span class="iconify" data-icon="material-symbols:arrow-forward-ios-rounded"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection