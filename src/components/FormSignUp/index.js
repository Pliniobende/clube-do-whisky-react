import React, { useContext } from "react";
import Form from "./Form";
import usersServices from "../../services/users.services";
import { UserContext } from "../../providers/user";

const initialValues = {};

export default () => {
  const { setUser } = useContext(UserContext);

  const handleSubmit = (values) => {
    usersServices
      .signup(values)
      .then((response) => {
        console.log(response);
        if (response.status === 201 && response.data.auth) {
          setUser({
            auth: response.data.auth,
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            token: response.data.token,
          });
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
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </>
  );
};
