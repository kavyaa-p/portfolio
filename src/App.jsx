import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Projects'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
