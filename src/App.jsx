import { useState, useEffect } from 'react'
import { Navbar } from './components'
import { Home } from './pages'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  
  return (
  <>
    <Router>  
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
  </>
  )
}

export default App
