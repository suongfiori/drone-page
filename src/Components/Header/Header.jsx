import React from 'react'
import menu from '../../assets/menu.svg'
import exit from '../../assets/exit.svg'
import "./Header.css"

const Header = ({menuOpen, handleMenuOpen, handleMenuExit}) => {
  return (
    <nav>
        <a href="/" className="logo"><span>Drone</span>.Series</a>
        <img 
          src={menu} 
          className="menu-btn" 
          onClick={handleMenuOpen}
        />
        <ul style={{transform: menuOpen ? "translateX(0%)" : "translateX(100%)"}}>
            <li className="exit-btn"><img src={exit} onClick={handleMenuExit}/></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Races</a></li>
            <li><a href="/">Register</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Header