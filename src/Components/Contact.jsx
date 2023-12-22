import React, { useState } from 'react';
import '../Css/Contact.css';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', username);
    console.log('send:', password);
  };

  return (
    <div>
    <div className="contact" id="contact">
      <div className="footer-left">
        <div className="login">
          <div className="form">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={handleUsernameChange}
              />
              <input
                type="text"
                placeholder="Write"
                value={password}
                onChange={handlePasswordChange}
              />
              <input type="submit" value="Send" className="submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <h3>THING'S I ONLY TALK ABOUT</h3>
        <div className="interests">
          <p>Frontend Development</p>
          <p>React</p>
          <p>Backend Development</p>
          <p>Ruby on Rails</p>
          <p>WordPress Development</p>
          <p>Startups</p>
          <p>New Opportunities</p>
          <p>Database</p>
          <p>Springboot</p>
          <p>Flight</p>
          <p>Bikes</p>
          <p>Space</p>
          
        </div>

     


        <hr />

        <div className="social">
          <span>
            <a href="https://github.com/gijendrap" target="_blank" rel="noreferrer">
              GITHUB
            </a>
          </span>
          <span>
            {' '}
            <a href="https://www.linkedin.com/in/gijendra-p-759143229/" target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
          </span>
          
          <span>
            <a href="x" target="_blank" rel="noreferrer">
              TWITTER
            </a>
          </span>
          <span>
            <a href="gijendra.gj@gmail.com" target="_blank" rel="noreferrer">
              gijendra.gj@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
      <button className="Btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
      <p className="text">Back to Top</p>
    </button>
    </div>
  );
};

export default Contact;
