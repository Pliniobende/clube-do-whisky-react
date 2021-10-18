import React, { useState } from "react";
import Form from "./Form";
import usersServices from "../../services/users.services";

export default () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {};

  const handleSubmit = async (values) => {
    const { status } = await usersServices.restorePassword(values);

    if (status == 200) {
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
        <p>Nova senha enviada por email</p>
      ) : (
        <Form handleSubmit={handleSubmit} initialValues={initialValues} />
      )}
    </>
  );
};
