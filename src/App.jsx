import React, { useState } from 'react'
import TopBackground from './Components/TopBackground/TopBackground'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Quote from './Components/Quote/Quote'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'

import './App.css'


function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuOpen = () => {
        setMenuOpen(true)
    }
    const handleMenuExit = () => {
        setMenuOpen(false)
    }

  return (
    <div className="App">
        <TopBackground />

        <div className="container">
            <Header 
                menuOpen={menuOpen}
                handleMenuOpen={handleMenuOpen}
                handleMenuExit={handleMenuExit}
            />
            <Content />
        </div>
        <section>
            <Quote />
            <Gallery />
            <Contact /> 
        </section>
    </div>
  )
}

export default App
