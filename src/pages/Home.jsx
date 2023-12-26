import React from 'react';
import { Navbar, Hero, Section, Promo, Services, Projects, Process, ProcessCard, Footer } from '../componnets';

function Home() {
    return (
        <div>
            <div className='relative flex items-center justify-center bg-secondary'>
                <Navbar />
                <Hero />
            </div>
            <Section />
            <Promo />
            <Services />
            <Projects />
            <Process />
            <Footer />
        </div >
    )
}

export default Home;