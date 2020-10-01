import React from 'react';
import './contact.styles.scss';
import github from './github.svg';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact.</h2>
      <p className="check">
        Contact me so we can work on that awesome project of yours!!
      </p>
      <div className="content">
        <div className="words">
          <p className="tagline">Want to work with me?</p>
          <h4>Let's Create Magic</h4>
          <p className="search">
            I am actively searching for opportunities and would love to know how
            I can Improve / contribute to your product with my skills.
          </p>
        </div>
        <div className="contact-details">
          <div className="icons">
            <a
              href="https://github.com/Chimdiya1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/chimdia-anyiam-409857129/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://twitter.com/AnyiamChimdia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <a className="shoot" href="mailto:fortunechimdiya@gmail.com">
            Shoot me an email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
