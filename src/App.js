import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';
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

        <Route path="/home"><Home /></Route>   

        <Route path="/user/signup"><SignupForm /></Route>

        <Footer />
    </Router>
  );
}

export default App;


