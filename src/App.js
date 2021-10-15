import "./App.css";

import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarPage from "./components/Navbar";
import CarouselW from "./components/Carousel";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import { AuthConext } from "./context/auth-context";

import FormSignUp from "./components/FormSignUp";
import usersServices from "./services/users.services";
import FormAvaliacao from "./components/FormAvaliacao";
import NovoCarrossel from "./components/novoCarrossel";
import Categorias from "./components/Categorias";

const handleSubmit = (values) => {
  console.log(values);
  usersServices
    .signup(values)
    .then((response) => {
      alert("Usuario cadastrado com sucesso!");
    })
    .catch((e) => {
      e.response.data ? alert(e.response.data) : alert(e);
      console.log(e);
    });
};
// const handleSubmit = values => {alert(JSON.stringify(values))}
const initialValues = {};
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignupForm from "./components/FormSignUp";
import { UserContext } from "./providers/user";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useContext(UserContext);

  return (
    <Router>
      <h1>
        {" "}
        valores = {user.name}, {user.token} !
      </h1>

      <Navbar />


  return (
    <AuthConext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        
        <FormSignUp handleSubmit={handleSubmit} initialValues={initialValues} />
   
        <NavbarPage />
        <NovoCarrossel />
        <Manifesto />
        <Categorias />
        <FormAvaliacao />
        <Footer />
        
      </Router>
    </AuthConext.Provider>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/user/signup">
        <SignupForm />
      </Route>

      <Footer />
    </Router>

  );
}

export default App;
