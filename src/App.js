import "./App.css";
import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NavbarPage from "./components/Navbar";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import { AuthConext } from "./context/auth-context";

import Signin from "./components/SignIn";
import FormSignUp from "./components/FormSignUp";
import usersServices from "./services/users.services";
import Avaliacao from "./components/Avaliacao";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthConext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavbarPage />
            <NovoCarrossel />
            <Route>
              <Manifesto />
            </Route>
            <Categorias />
            <Avaliacao />
            <Footer />
          </Route>

          <Route path="/user/signup" exact>
            <FormSignUp
              handleSubmit={handleSubmit}
              initialValues={initialValues}
            />
            <Footer />
          </Route>

          <Router path="/user/signin">
            <Signin />

            <Footer />
          </Router>

          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthConext.Provider>
  );
}
export default App;
