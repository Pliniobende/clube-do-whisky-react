import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import CarouselW from './components/Carousel';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import SignupForm from './components/FormSignUp';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
    <Router>  
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        {/* <CarouselW />
        <Manifesto /> */}
        

        <Route path="/user/signup"><SignupForm /></Route>

        <Footer />
    </Router>
  );
}

export default App;


