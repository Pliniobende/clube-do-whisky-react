import './App.css';
import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import CarouselW from './components/Carousel';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';

import { AuthConext } from './context/auth-context';
import Switch from 'react-bootstrap/esm/Switch';
import FormSignUp from './components/FormSignUp';
import usersServices from './services/users.services';
import Brands from './components/Brands';


const handleSubmit = values => {
  console.log(values);
  usersServices.signup(values)
  .then(response => {
    alert('Usuario cadastrado com sucesso!');
  })
  .catch(e => {
    e.response.data ? alert(e.response.data) : alert(e);
    console.log(e);
  })
}
// const handleSubmit = values => {alert(JSON.stringify(values))}
const initialValues = {}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

 

  return (

    <AuthConext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
     <Router>  
     <FormSignUp handleSubmit={handleSubmit} initialValues={initialValues}/>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}  />
          <CarouselW />
          <Manifesto />
          <Brands />
          <Footer />
      </Router>
    </AuthConext.Provider>
)
   
}
export default App;

