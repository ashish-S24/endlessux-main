import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';
import Hero from './componnets/Hero';
import Navbar from './componnets/Navbar';
import Section from './componnets/Section';
import Projects from './componnets/Projects';
import Process from './componnets/Process';
import Footer from './componnets/Footer';
import ProcessCard from './componnets/ProcessCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
       <Hero/>
       <Section/>
       <Projects />
       <Process />
       <ProcessCard />
       <Footer />
      </div>
    </>
  )
}

export default App
