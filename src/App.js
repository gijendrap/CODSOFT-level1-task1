import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Prod from './Components/Prod'
// import Pro from './Components/Pro';
// import Card from './Components/CardList'
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Projects />
      <About />
      <Prod />
      {/* <Pro />
      <Card /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
