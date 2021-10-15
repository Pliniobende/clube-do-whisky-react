import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Form from "./Form";
import userServices from "../../services/users.services";
import { UserContext } from "../../providers/user";

const initialValues = {};

export default () => {
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (values) => {
    userServices
      .signin(values)
      .then((response) => {
        if (response.status == 202 && response.data.auth) {
          setUser({
            auth: response.data.auth,
            name: response.data.name,
            email: response.data.email,
            token: response.data.token,
          });
          localStorage.setItem("user", JSON.stringify(response.data));
        } else {
          response.data ? alert(response.data) : alert(response);
        }
      })
      .catch((e) => {
        e.response.data ? alert(e.response.data) : alert(e);
      });
  };

  return (
    <>
      {user.auth ? (
        <Redirect to="/home" />
      ) : (
        <Form handleSubmit={handleSubmit} initialValues={initialValues} />
      )}
    </>
  );
};
