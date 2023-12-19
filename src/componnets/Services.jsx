import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { point_arrow } from '../assets';
import { progress } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '../constant/services';

gsap.registerPlugin(ScrollTrigger);

function Services() {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

 

  useEffect(() => {
    const pin = gsap.fromTo(
      triggerRef.current,
      {
        rotate:"-90deg",
      },
      {   
        rotate:"0deg",
        ease:"none",
        duration: 6,
        scrollTrigger:{
          trigger: sectionRef.current,
          start:"top top",
          end:"top top",
          scrub: 0.6,
          pin: true,
        }
      }
    )
  })

  return (
    <div ref={sectionRef} className=' bg-black flex flex-col p-[64px]'>
        <div  className='flex mt-20'>
            <div className=' font-syne font-semibold text-[96px] text-white'>
              Our Services
            </div>
            <div  className='ml-10 h-[50px] w-[80px]'>
                <img ref={triggerRef} src={point_arrow} className='mt-5 '/>
            </div>
        </div>
        <div className='mt-14 w-full'>
          <div className='w-full  grid grid-cols-2 gap-20'>
             {
                services.map((service) => {
                   return (
                      <ServiceCard icon={service.icon} title={service.title} description={service.description}/>
                   )
                })
             }
          </div>
        </div>
    </div>
  )
}

export default Services;