// YourComponent.js

import React, { useEffect } from 'react';
import '../Css/Projects.css';

const YourComponent = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider');

    function activate(e) {
      const items = document.querySelectorAll('.item');
      e.target.matches('.next') && slider.append(items[0]);
      e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener('click', activate, false);

    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, []);

  return (
    <main>
      <ul className='slider'>
        <li className='item' style={{ backgroundImage: "url('https://images5.alphacoders.com/131/1316260.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://images5.alphacoders.com/131/1316260.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Portfolio"</h2>
            <p className='description'> In my portfolio, witness a showcase of my coding prowess and web development expertise. Each project is a testament to my commitment to crafting seamless, user-centric experiences with a perfect blend of functionality and aesthetics.  </p>
            <button  >  Read More</button>
          </div>
        </li>
      </ul>
      <nav className='nav'>
        <ion-icon className='btn prev' name='arrow-back-outline'></ion-icon>
        <ion-icon className='btn next' name='arrow-forward-outline'></ion-icon>
      </nav>
    </main>
  );
};

export default YourComponent;
