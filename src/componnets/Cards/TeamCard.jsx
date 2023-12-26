import React from 'react';
import Spline from '@splinetool/react-spline';
import Magnetic from '../Common/Magnetic';
import { insta, linkedIn_icon } from '../../assets';

function TeamCard({ firstName, lastName, intro, instaLink, linkedIn, skills, scene }) {
    return (
        <div className=' h-[1000px] bg-black  px-[64px] flex flex-col items-center relative' >
            <div className='h-full w-full  flex items-end justify-center'>
                {/* <Spline scene="https://prod.spline.design/VfQ4bUO7Te8HtiQp/scene.splinecode" /> */}
            </div>
            <div className='absolute top-0 flex justify-center h-full w-full p-[64px]'>
                <div className='w-full h-[70%] flex flex-col justify-evenly relative '>
                    <h1 className=' font-underated text-primary text-[48px]'>Ashish <br /> Shedage </h1>
                    <p className=' font-syne text-[16px] text-white'>Meet Ashish, a valued member of our EndlessUX team, contributing as a skilled developer. With a focus on creating seamless digital experiences,
                        Ashish brings a wealth of expertise to the team.
                        His dedication to crafting high-quality solutions and collaborative approach make him an integral part of our project success.
                    </p>
                    <div className=' gap-4 flex'>
                        <Magnetic>
                            <div className='h-16 w-16 p-2 flex items-center justify-center rounded-full hover:bg-primary transition-all ease-in-out duration-100'>
                                <img className='h-10 w-10' src={insta}/>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className='h-16 w-16 p-2 flex items-center justify-center rounded-full hover:bg-primary transition-all ease-in-out duration-100'>
                                <img className='h-10 w-10' src={linkedIn_icon}/>
                            </div>
                        </Magnetic>
                    </div>
                </div>
                <div className='w-full h-full relative '></div>
                <div className='w-full h-[70%] flex flex-col items-end  relative'>
                    <h1 className=' font-underated text-primary text-[48px]'>skills</h1>
                    {/* <div className='w-full grid grid-rows-3 grid-flow-col gap-4 items-end'>
                        {
                            skills.map((skill, i) => {

                                return (
                                        <div className={`w-fit h-[41px] border border-primary px-3 py-2 flex items-center text-center col-span-${skill.length > 9 ? 1 : 1}`}>
                                            <span className=' font-syne text-[20px] text-white'>{skill}</span>
                                        </div>
                                )
                            })
                        }
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default TeamCard