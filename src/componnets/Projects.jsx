import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCards from './ProjectCards';
import { projects } from '../constant/projectData';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

function Projects() {
    const container = useRef(null);
    const {scrollYProgress } = useScroll({
        target: container,
        offset:['start start', 'end end']
    })
    return (
        <div className='relative bg-black p-[64px]'>
            <div className=''>
                <h1 className='text-white mt-20 font-syne text-[96px] font-semibold'>Our projects</h1>
            </div>
            <div ref={container}>
               {
                  projects.map((project , i) =>{
                    const targetScale = 1 - ((projects.length - i) * 0.1 );
                    return <ProjectCards key={`p_${i}`} {...project} i = {i} {...project}  progress={scrollYProgress} range={[i * 0.1 , 2]} targetScale={targetScale} color={project.color}/>
                  })
               }
            </div>
        </div>
    )
}

export default Projects;