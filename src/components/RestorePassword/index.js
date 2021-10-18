import React, { useState } from "react";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import usersServices from "../../services/users.services";

export default () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {};

  const handleSubmit = async (values) => {
    const { status } = await usersServices.restorePassword(values);

    if (status == 200) {
      setSubmitted(true);
      alert("Nova senha enviada por e-mail");
    } else {
      alert(
        "Falha ao tentar redefinir a senha, verifique o e-mail informado e tente novamente"
      );
    }
  };

  return (
    <>
      {submitted ? (
        <div>
          <p>Nova senha enviada por email</p>
          <NavLink to="/">
            <Button variant="dark">Voltar Home</Button>
          </NavLink>
          <NavLink to="/user/signin">
            <Button variant="dark">Ir para Login</Button>
          </NavLink>
        </div>
      ) : (
        <Form handleSubmit={handleSubmit} initialValues={initialValues} />
      )}
    </>
  );
};
