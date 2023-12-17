import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className='h-scree w-screen relative'>
            <div className='h-screen overflow-hidden'>
                <Spline scene="https://prod.spline.design/6Y3nPLs2hgAhzQuB/scene.splinecode" />
            </div>
            <motion.div
             class="w-[411px] h-32 absolute bottom-20 right-20 text-right text-xl text-white text-[20px] font-normal font-stretch_pro">
                DRIVEN BY DESIGN <br />EMPOWERED BY <br /> TECHNOOLOGY<br />INNOVATIVE BY NATURE
            </motion.div>
        </div>
    )
}

export default Hero;