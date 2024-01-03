import { useState } from 'react'
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Project from './pages/Project';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
