import React from 'react';
import LinkButton from './LinkButton';
import { useTransform, motion, color } from 'framer-motion';



function ProjectCards({ title, description, src, url, i , progress, range, targetScale , color}) {
  
    const scale = useTransform(progress, range , [1 , targetScale]);
    
    return (
        <div className='top-0  flex flex-col items-center justify-center' style={{ height: '100vh', position: 'sticky' ,}}>
            <motion.div className='rounded-3xl w-full h-[80vh] p-8 flex bg-secondary relative' style={{ background: `${color}`, top: `calc(-5vh + ${i * 25}px)`, scale}}>
                <div className='h-full w-[70%] flex flex-col p-4 justify-between'>
                    <div className='h-[25vh] rounded-2xl border border-primary'>

                    </div>
                    <div className='text-white font-poppin text-[24px] text-justify'>
                        {description}
                    </div>
                    <div className='flex items-center'>
                        <p className='text-white font-underated text-[84px]'>{title}</p>
                        <LinkButton />
                    </div>
                </div>
                <div className='p-4 w-[30%] flex justify-end'>
                    <div className='border border-primary rounded-md h-full w-[90%]'></div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCards