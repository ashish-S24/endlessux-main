import React, {useState} from 'react'
import MenuButton from './MenuButton'
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './Nav';
import Magnetic from './Magnetic';

const varients = {
  open:{
    width: 480,
    height: 650,
    top:"-25px",
    right:"-25px",
    transition : {duration: 0.75, ease:[0.76, 0, 0.24 , 1]}
  },
  closed: {
    width: 100,
    height: 40,
    top:"0px",
    right:"0px",
    transition : {duration: 0.75, delay: 0.35, ease:[0.76, 0, 0.24 , 1]}
  }
}


function Navbar() {
 const[isActive , setActive] = useState(false);
 function handleActive(){
    setActive(!isActive);
 }
  return (
    <div className=' absolute flex justify-between top-10 right-16  p-4 z-10 w-screen text-white'>
      <div></div>
      <div className=''>
        <motion.div 
        className='w-[480px] h-[650px] bg-primary rounded-[25px] relative'
        variants={varients}
        animate={isActive ? "open":"closed"}
        initial= "closed"
        >
          <AnimatePresence>
            {isActive && <Nav/>}
          </AnimatePresence>
        </motion.div>
       <MenuButton isActive={isActive} setActive={handleActive}/>
      </div>
    </div>
  )
}

export default Navbar



