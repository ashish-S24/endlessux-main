import React from 'react'
import AboutHero from '../componnets/AboutHero'
import TeamCard from '../componnets/Cards/TeamCard';
import { teamData } from '../constant/teamData';
import AboutSection from '../componnets/AboutSection';
import Testimonial from '../componnets/TEstimonial';
import Spline from '@splinetool/react-spline';

function About() {
  return (
    <div>
        <AboutHero />
        <div className='bg-black h-fit p-[64px]'>
          <div className='flex items-center justify-center text-white text-[64px] font-underated gap-7'>
            <h1 className=''> Our team</h1>
            <div className='w-[602px] h-1 bg-primary'></div>
            <span className='font-stretch_pro'>01</span>
          </div>
            {
                teamData.map((member, i) => {
                    return(

                          <div>
                            <TeamCard firstName={member.firstName} lastName={member.lastName} intro={member.intro} instaLink={member.instaLink} linkedIn={member.linkedIn} scene={member.scense} skills={member.skills} />
                          </div>
                    )
                })
            }
        </div>
        <AboutSection />
        <Testimonial />
    </div>
  )
}

export default About