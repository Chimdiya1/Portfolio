import React, {useState} from 'react'
import './header.styles.scss'

const Header = () => {
  const [visible, setVisible] = useState(false);
    return (
      <header>
        <p className="logo">C - 01000011</p>
        <div className={`links ${visible ? `show` : ''}`}>
          <a onClick={() => setVisible(!visible)} href="#projects">
            PROJECTS
          </a>
          <a onClick={() => setVisible(!visible)} href="#resume">
            RESUME
          </a>
          <a onClick={() => setVisible(!visible)} href="#contact">
            CONTACT
          </a>
        </div>
        <div className="menu" onClick={() => setVisible(!visible)}>
          <span class={`menu__burger ${visible ? 'open' : ''}`}></span>
        </div>
      </header>
    );
}
 
export default Header;