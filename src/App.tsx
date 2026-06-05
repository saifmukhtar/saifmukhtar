import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Skills from './pages/Skills'
import Publications from './pages/Publications'
import Experiments from './pages/Experiments'
import Contact from './pages/Contact'
import Links from './pages/Links'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import License from './pages/License'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/projects"    element={<Projects />} />
        <Route path="/research"    element={<Research />} />
        <Route path="/skills"      element={<Skills />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/links"       element={<Links />} />
        <Route path="/privacy"     element={<Privacy />} />
        <Route path="/terms"       element={<Terms />} />
        <Route path="/license"     element={<License />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

