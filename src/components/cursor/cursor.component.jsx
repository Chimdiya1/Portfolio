import React, { useState,useEffect } from 'react'
import './cursor.styles.scss'


const Cursor = () => {
    const [clicked, setClicked] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
    };


    const onMouseLeave = () => {
       setHidden(true);
   };

   const onMouseEnter = () => {
       setHidden(false);
   };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX-10, y: e.clientY-10 });
    };
    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };
    return (
      <div
        className={`cursor ${clicked ? 'cursor--clicked' : ''} ${
          hidden ? 'cursor--hidden' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    );

}

export default Cursor;