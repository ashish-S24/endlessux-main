import React from 'react';
import { Navbar, Hero , Section, Services, Projects, Process, ProcessCard , Footer } from '../componnets';

function Home() {
  return (
    <div>
        <div className='relative flex items-center justify-center bg-secondary'>
        <Navbar />
        <Hero/>
        </div>
       <Section/>
       <Services />
       <Projects />
       <Process />
       <ProcessCard />
       <Footer />
    </div>
  )
}

export default Home;