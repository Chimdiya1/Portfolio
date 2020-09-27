import React,{useRef,useEffect} from 'react'
import './home.styles.scss'
import lineImg from './line.svg'
import { TweenMax, Power3 } from 'gsap';
import circles from './circles.png'
import hire from './hire.png'
const Home = () => {
  let name = useRef(null);
  let p1 = useRef(null);
  let p2 = useRef(null);
  let blue = useRef(null);
  let blue1 = useRef(null);
  let op1 = useRef(null);
  let op2 = useRef(null);
  useEffect(() => {
    console.log(name);
    TweenMax.staggerFrom([name, p1, p2], 1,{
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
      delay: 1,
    },.3);
    TweenMax.to([blue,blue1], 1, {
      color: '#0F18FD',
      
      ease: Power3.easeOut,
      delay: 2,
    });
    TweenMax.from([op1,op2], 5, {
      opacity:0,
      ease: Power3.easeOut,
      delay:3
    });
    // TweenMax.from(p2, 1, {
    //   opacity:0,
    //   y: 100,
    //   ease: Power3.easeOut,
    //   delay:1.4
    // });
  }, []);
    return (
      <div className="home" id="home">
        <h1 ref={(el) => (name = el)} className="name">
          Hi, I'm <span ref={(el) => (blue = el)}>Chimdia Anyiam.</span>
        </h1>
        {/* <img ref={(el) => (line = el)} className="line" src={lineImg} alt="line" /> */}
        <p ref={(el) => (p1 = el)}>
          Software Engineer with strong passion for technology that makes lives.
          I love food, music and anything that has to do with water.
        </p>
        <p ref={(el) => (p2 = el)}>
          When I’m not sleeping, I primarily use{' '}
          <span className="blue1" ref={(el) => (blue1 = el)}>
            JavaScript, SASS, React, NodeJs{' '}
          </span>
          and more to implement solutions that work, design pixel perfect User
          Interfaces and write about what I learn on{' '}
          <a href="https://chimdia.hashnode.dev/">chimdia.hashnode.dev</a>
        </p>
        <img
          ref={(el) => (op1 = el)}
          className="circles"
          src={circles}
          alt="circles"
        />
        <img ref={(el) => (op2 = el)} className="hire" src={hire} alt="hire" />
      </div>
    );
}
 
export default Home;