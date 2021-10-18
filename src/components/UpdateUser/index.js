import React, { useContext, useState } from "react";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import usersServices from "../../services/users.services";
import { UserContext } from "../../providers/user";
import { Redirect } from "react-router";

export default () => {
  const { user, setUser } = useContext(UserContext);

  const [submitted, setSubmitted] = useState(false);

  const initialValues = {};

  const handleSubmit = async (values) => {
    const body = {
      id: user.id,
      name: values.name,
      password: values.password,
      email: values.email,
      mobile: values.mobile,
      newsLetter: values.newsLetter,
    };

    try {
      const response = await usersServices.updateUser(body, user.token);

      if (response.status == 200) {
        setSubmitted(true);
      } else {
        console.log(response);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      {user.token ? (
        submitted ? (
          <>
            <h1>Atualizado com sucesso!</h1>
            <NavLink to="/">
              <Button variant="dark">Voltar Home</Button>
            </NavLink>
          </>
        ) : (
          <Form handleSubmit={handleSubmit} initialValues={initialValues} />
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
