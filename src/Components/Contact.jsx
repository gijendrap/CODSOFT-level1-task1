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
  );
};

export default Contact;
