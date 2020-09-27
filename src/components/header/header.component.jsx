import React, {useState} from 'react'
import './header.styles.scss'

const Header = () => {
  const [visible, setVisible] = useState(false);
    return (
      <header>
        <p className="logo">C - 01000011</p>
        <div className={`links ${visible ? `show` : ''}`}>
          <a onClick={() => setVisible(!visible)} href="#projects">
            Projects
          </a>
          <a onClick={() => setVisible(!visible)} href="#resume">
            Resume
          </a>
          <a onClick={() => setVisible(!visible)} href="#contact">
            Contact
          </a>
        </div>
        <p className="menu" onClick={() => setVisible(!visible)}>
          {visible ? 'X' : 'MENU'}
        </p>
      </header>
    );
}
 
export default Header;