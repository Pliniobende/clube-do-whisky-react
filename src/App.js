import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignupForm from "./components/FormSignUp";
import SigninForm from "./components/FormSignIn";
import { UserContext } from "./providers/user";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useContext(UserContext);

  return (
    <Router>
      <Navbar />

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/user/signup">
        <SignupForm />
      </Route>

      <Route path="/user/signin">
        <SigninForm />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
