import React from 'react';
import Marquee from 'react-fast-marquee';

function AboutSection() {
  return (
    <div>
      <div className='relative h-[100vh] w-full px-[64px] flex  items-center justify-around bg-black'>
        <div className='relative h-full w-full  flex items-center justify-start'>
          <span className='absolute text-[120px] font-underated leading-[120px] text-second_grey'>Be a <br /> part <br /> of <span className='text-primary'>us </span></span>
        </div>
        <div className='w-full  flex justify-center'>
          <div className='rounded-full h-[315px] w-[315px] bg-secondary relative mr-8 flex items-center justify-center'>
            <div className='h-[160px] w-3 bg-primary'></div>
            <div className='absolute h-[160px] w-3 rotate-90 bg-primary'></div>
          </div>
        </div>
        <div className='relative h-full w-full  flex items-center justify-end'>
          <span className='absolute text-[120px] font-underated leading-[130px] text-second_grey'>share<br /> your </span>
          <span className='absolute text-[120px] font-underated leading-[100px] text-second_grey mt-[450px]'>Portfolio</span>
        </div>
      </div>
      <div className='w-full h-20 bg-primary relative'>
        <Marquee className='h-full gap-3' loop={0} autoFill={true} direction="right">
          <span className='text-[20px] flex gap-4 font-poppin font-bold'>
            <span className='ml-2'>!</span>
            <span> HURRY UP </span>
          </span>
        </Marquee>
      </div>
    </div>
  )
}

export default AboutSection