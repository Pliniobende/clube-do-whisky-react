import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import CarouselW from './components/Carousel';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import FormSignUp from './components/FormSignUp';
import usersServices from './services/users.services';

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
// descomentei a linha acima para poder rodar o login... nao sei se vai rodar--- Jose Luis
const initialValues = {}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
    <Router>  
        <FormSignUp handleSubmit={handleSubmit} initialValues={initialValues}/>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        <CarouselW />
        <Manifesto />
        <Footer /> */}
    </Router>
  );
}
// const App = ()=>(
  
//   <div className="App">
//     <Login handleSubmit = {handleSubmit} initialValues = {initialValues}></Login>
//   </div>
// )

export default App;


