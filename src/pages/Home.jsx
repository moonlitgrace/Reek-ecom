import React, { useEffect, useRef } from 'react'
import GrabOrGone from '../components/GrabOrGone/GrabOrGone'
import HeroSection from '../components/HeroSection/HeroSection'
import { motion } from 'framer-motion'
import { RockingNow } from '../components/RockingNow/RockingNow'

const Home = () => {
    const rockingRef = useRef()
    useEffect(() => {
        document.title = 'REEK | Best Online clothing store for Mens'
    })
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HeroSection rockingRef={rockingRef} />
            <GrabOrGone />
            <RockingNow rockingRef={rockingRef} />
        </motion.div>
    )
}

export default Home