import { motion} from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

function Footer() {
  const container = useRef(null);
  // const {scrollYProgress} = useScroll({
  //   target:container,
  //   offset:["start end", "end start"]
  // })

  // const x= useTransform(scrollYProgress , [0,1], [0,1000])
  // const y = useTransform(scrollYProgress,[0,1], [0,0])
  // const rotate = useTransform(scrollYProgress, [0,1], [120, 90])

  const date = new Date();
  const showTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ashish-shedage-a8725a176/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ashish.11_11/",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ashish_shedage",
    },
  ];

  const [isHovered, setHovered] = useState(false);
  const [isEnter, setEnter] = useState(false);
  return (
 <motion.div className="bg-black relative">
    <div className={`w-full px-5 relative `} >
      <div className="flex flex-row justify-between items-end w-full h-[10vh]">
        <div className="">
          <p className="text-white text-[18px] relative font-thin  flex flex-col" onMouseEnter={()=>setEnter(true)} onMouseLeave={()=>setEnter(false)}>
            Pune, India
          </p>
        </div>
        <div className="flex justify-center h-[6vh] place-content-center ml-[100px]">
          <span className="font-sans w-[30vh] flex items-center justify-around text-white text-[20px] border px-4 rounded-3xl border-primary">
            <span className=" rounded-full h-3 w-3  bg-purple-800 shadow-purple-600"></span>
          STAY IN TOUCH
          </span>
        </div>
        <div className="flex justify-end">
          <span className="font-thin text-white text-[18px]">
            18.5204° N, 73.8567° E
          </span>
        </div>
      </div>
      <div className="w-full h-[400px] flex justify-center flex-col mt-[60px]">
        <div className="flex justify-center">
          <span className="font-thin text-white text-[20px]">
            Have a nice project?
          </span>
        </div>
        <div className="flex justify-center text-white font-underated">
          <div
            className="overflow-hidden h-[80px] w-[50%]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <motion.div
              className="flex justify-center items-center font-sans font-light leading-tight text-center text-[60px] cursor-pointer"
              animate={isHovered ? { translateY: "-105%", }  : {}}
              transition={{duration: 0.75, ease:[0.76, 0, 0.24 , 1]}}
            >
            Ready to talk
            </motion.div>
            <motion.div
              className="flex justify-center items-center font-sans font-light leading-tight text-center text-[60px] cursor-pointer"
              animate={isHovered ? { translateY: "-105%", } : {}}
              transition={{duration: 0.75, ease:[0.76, 0, 0.24 , 1]}}
            >
            Ready to talk
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-[90px]">
        <div className="flex flex-row w-full m-2">
          <div className="flex flex-col">
          <span className="font-thin text-[15px] text-gray-400">
           VERSION
          </span>
          <span className="font-thin text-[15px] text-white mt-2">
            2023 © Edition
          </span>
          </div>
          <div className="flex flex-col ml-10">
          <span className="font-thin text-[15px] text-gray-400">
            LOCAL TIME
          </span>
          <span className="font-thin text-[15px] text-white mt-2">
          {showTime+" "}IST
          </span>
          </div>
        </div>
        <div className="flex justify-end w-full">
            {
                socialLinks.map((item , index) =>{
                    return (
                      <Magnetic key={index}> 
                      <div  className="rounded-full py-1 px-4 w-[136px] h-[50px] flex justify-center items-center m-2  border border-solid border-gray-400 text-white">
                        <a className="font-sans font-light leading-normal text-center cursor-pointer text-base">
                          {item.name}
                        </a>
                      </div>
                      </Magnetic>
                    )
                })
            }
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Footer;
