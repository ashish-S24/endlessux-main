import React, { useEffect, useState, memo } from 'react';
import { alien_load } from '../assets';
import { motion, useAnimation } from 'framer-motion';

const Preloader  = memo(function({value = 0}) {
    const control = useAnimation();
    const secondControl = useAnimation();
    const image_animation = useAnimation();
    const[percent , setPercent] = useState(value);

    
    const fadeVarient = {
        initial:{
            opacity:1
        },
        exit:{
            opacity:0,
            transition : {duration: 0.5, ease:[0.76, 0, 0.24 , 1]}
        }
    }

    function handleClose() {
        
    }

    const callImage = async () => {
        image_animation.start({ scale: 70, x: -900 , y:-1230, rotate: 45 }).then(handleClose());  
    }

    useEffect(() => {
        if (percent === 100) {
          secondControl.start({pathLength: 1}).then(callImage);
        }
      }, [percent, secondControl]);

    useEffect(() =>{
        setPercent(Math.min(100 , Math.max(value , 0)));
        
    }, [value]);

    useEffect(() => {
        control.start({pathLength: percent / 100});
    }, [percent, control])


  return (
    <motion.div variants={fadeVarient} initial='initial' exit='exit' className=' fixed w-screen h-screen flex items-center justify-center bg-black z-50'>
        <div className='h-1/2 w-1/2  relative flex flex-col items-center justify-center'>
            <h1 className={`text-white text-[24px] ${percent == 100 ? 'opacity-0': ''} transition-all ease-linear duration-100`}>{percent}%</h1>
        <svg width="317" height="317" viewBox="0 0 217 217" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle cx="108.254" cy="108.746" r="108.073" 
        stroke="#CDE648" stroke-width="0.363881"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={control}
        transition={{ ease: 'easeInOut' }}
        />
        <motion.circle cx="108.254" cy="108.746" r="108.073" 
        stroke="#000000" stroke-width="0.363881"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={secondControl}
        onAnimationComplete={callImage}
        transition={{ duration: 0.75, ease:[0.76, 0, 0.24 , 1] }}
        />
        </svg>
        <motion.img
         src={alien_load} className='absolute z-10'
         animate={image_animation}
         onAnimationEnd={handleClose()}
         transition={{ duration: 2, ease:[0.76, 0, 0.24 , 1] }}
         />
        </div>
    </motion.div>
  )
})

export default Preloader