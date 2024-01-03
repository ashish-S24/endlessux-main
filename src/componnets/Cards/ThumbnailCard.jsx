import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ThumbnailCard({bg_image , logo , title , description, hight , logo_h , logo_w}) {
    const [isHover , setIsHover] = useState(false);

    function handleHover(){
        setIsHover(!isHover);
    }

    const variant = {

        enter:{
            opacity: 0.8
        },
        exit : {
            opacity:0,
            transition:{ duraion : 3 , ease: [0.76 , 0 , 0.24 , 1]}
        }
    }
    return (
        <div onMouseEnter={()=> handleHover()} onMouseLeave={()=> handleHover()} className={`h-[${hight}px] relative flex items-center justify-center overflow-hidden`}>
            <img src={bg_image} className='h-full w-full object-cover' />
            <img src={logo} className={`absolute w-[${logo_w}px] h-[${logo_h}px]`} />
            <motion.div variants={variant}  animate={ isHover ? "enter" : "exit"}  className='absolute h-full bg-white opacity-70 w-full flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-full px-8'>
                    <h1 className=' font-poppin text-[24px] text-black font-semibold' >{title}</h1>
                    <p className=' font-poppin text-[14px] text-black text-center mt-10'>{description}</p>
                    <button className='w-[166px] h-[44px] mt-10 flex items-center justify-center text-white bg-black font-poppin font-semibold text-[16px]'>Explore now</button>
                </div>
            </motion.div>
        </div>
    )
}

export default ThumbnailCard