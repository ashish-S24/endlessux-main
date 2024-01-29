import React,{useState , useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';

import { Hero, Section, Promo, Services, Projects, Process, Preloader } from '../componnets';

function Home() {
    const [isLoading , setIsLoading] = useState(true);
  const [value , setValue] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((val) => val + 1);
    }, 100);

    // Simulate the loading time based on the animation duration
    const loadingTime = 14000; // Replace with the actual duration of your preloader animation

    setTimeout(() => {
      clearInterval(intervalId);
      setIsLoading(false);
    }, loadingTime);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
    return (
        <div className='bg-black' >
            <AnimatePresence mode='wait'>
            {
                isLoading && <Preloader value = {value} />
            }
            </AnimatePresence>
            <div className='relative flex items-center justify-center bg-secondary'>
                <Hero />
            </div>
            <Section />
            <Promo />
            <Services />
            <Projects />
            <Process />
        </div >
    )
}

export default Home;