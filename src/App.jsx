import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Avatar from './Pages/Avatar'
import Banner from './Pages/Banner'
import GitHub from './Pages/GitHub'
import Development from './Pages/Blogs/Development'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/blog/development" element={<Development />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/github" element={<GitHub />} />
    </Routes>
  )
}

export default App
