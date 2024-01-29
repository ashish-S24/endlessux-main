import { useEffect, useState,  } from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route ,useLocation } from 'react-router-dom';
import About from './pages/About';
import Project from './pages/Project';
import { Footer, Navbar, Preloader } from './componnets';
import {ProjectEstisource , ProjectOlienda , ProjectMorehealth, PorjectBiosens} from './pages/work'



function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  useEffect( () => {
    (
      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  
  return (
    <div>
        <Router basename='/'>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects">
              <Route index element={<Project />} />
              <Route path='Olienda' element={<ProjectOlienda />} />
              <Route path='Morehealthcare' element={<ProjectMorehealth />} />
              <Route path='Estisource' element={<ProjectEstisource />} />
              <Route path='Biosens' element={<PorjectBiosens />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default App
