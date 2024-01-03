import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Education from "./pages/Education"
import Project from "./pages/Project"
import Internship from "./pages/Internship"
import ContactMe from "./pages/ContactMe"
import NotFound from "./components/NotFound"
import DetailProject from "./components/DetailProject"
import Testing from "./pages/Testing"

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/detail-project" element={<DetailProject />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/about-me" element={<About />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/testing" element={<Testing />} />

      </Routes>
    </>
  )
}

export default App
