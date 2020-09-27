import React, {useState, useRef, useEffect} from 'react'
import './header.styles.scss'
import { TweenLite, Power3 } from 'gsap';
const Header = () => {
  const [visible, setVisible] = useState(false);
  let head = useRef(null)
  useEffect(() => {
    console.log(head);
    TweenLite.from(head, 1, {
      opacity: 0,
      y: -200,
      ease: Power3.easeOut,
    });

  }, [])
  console.log(head)
    return (
      <header ref={el=>(head = el)}>
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
          <span className={`menu__burger ${visible ? 'open' : ''}`}></span>
        </div>
      </header>
    );
}
 
export default Header;