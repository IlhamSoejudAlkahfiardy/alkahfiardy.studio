import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Education from "./pages/Education"
import Project from "./pages/Project"
import Internship from "./pages/Internship"
import ContactMe from "./pages/ContactMe"

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<ContactMe />} />

      </Routes>
    </>
  )
}

export default App
