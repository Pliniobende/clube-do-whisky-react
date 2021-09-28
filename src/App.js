import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import CarouselW from './components/Carousel';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
    <Router>  
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        <CarouselW />
        <Manifesto />
        <Footer />
    </Router>
  );
}

export default App;


