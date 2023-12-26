import { useState } from 'react'
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
