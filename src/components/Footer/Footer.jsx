import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/reek-logo-light.png'
import ItemContext from '../../context/ItemContext'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {

    const { cats } = useContext(ItemContext)

    return (
        <footer>
            <div className="footer-container bg-stone-800 md:px-20 px-4 py-10">
                <div className="footer-box">
                    <div className="footer-head flex justify-between md:gap-0 gap-5 ">
                        <div className="site-details">
                            <img className='md:w-24 w-20' src={Logo} alt="" />
                            <p className='mt-5 text-white/75 md:text-md text-sm'>REEK is a best online clothing store for men's. <br />
                                We provide good quality items for men's fasion. <br /> <br />
                                &copy; REEK private limited - since 2022
                            </p>
                        </div>
                        <div className="categories md:block hidden">
                            <h4 className='text-white md:text-lg text-md font-medium'>Top Categories</h4>
                            <div className="cats text-white/75 mt-3 flex flex-col gap-2 md:text-md text-sm">
                                {
                                    cats.filter(fcat => ( fcat.rocking_now = true)).slice(0, 4).map(cat => (
                                        <Link to={`/categories/${cat.slug}`} className='hover:text-white'>{cat.title}</Link>
                                    ))
                                }
                            </div>

                        </div>
                        <div className="quick-links md:block hidden">
                            <h4 className='text-white text-lg font-medium'>Quick Links</h4>
                            <div className="links text-white/75 mt-3 flex flex-col gap-2 text-sm">
                                <HashLink to='/#rocking' smooth className='hover:text-white'>Rocking Items</HashLink>
                                <HashLink to='/#grab-or-gone' smooth className='hover:text-white'>Grab or Gone</HashLink>
                            </div>
                        </div>
                        <div className="useful-links">
                            <h4 className='text-white md:text-lg text-md font-medium'>Useful Links</h4>
                            <div className="links text-white/75 mt-3 flex flex-col gap-2 text-sm">
                                <HashLink to='/basket#basket' className='hover:text-white'>Your  Basket</HashLink>
                                <HashLink to='/account' className='hover:text-white'>Orders</HashLink>
                                <HashLink to='/basket#saved' className='hover:text-white'>Saved</HashLink>
                                <HashLink to='/account' className='hover:text-white'>Settings</HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center bg-stone-900 py-7 text-white/75 md:text-md text-sm">
                <p>Site designed and developed by Suneeth</p>
            </div>
        </footer>
    )
}

export default Footer