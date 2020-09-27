import React from 'react'
import './home.styles.scss'
import line from './line.svg'
import circles from './circles.png'
import hire from './hire.png'
const Home = () => {
    return (
      <div className="home" id='home'>
        <h1 className="name">Hi, I'm Chimdia Anyiam.</h1>
        <img className='line' src={line} alt="line" />
        <p>
          Software Engineer with strong passion for technology that makes lives.
          I love food, music and anything that has to do with water.
        </p>
        <p>
          When I’m not sleeping, I primarily use JavaScript, SASS, React, NodeJs
          and more to implement solutions that work and design pixel perfect
          User Interfaces and write about what I learn on chimdia.hashnode.dev
        </p>
        <img className='circles' src={circles} alt="circles" />
            <img className='hire' src={hire} alt="hire" />
            <p>arrow</p>
      </div>
    );
}
 
export default Home;