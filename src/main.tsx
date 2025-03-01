import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Projects from './pages/Projects/index.tsx';
import About from './pages/About/index.tsx';



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);