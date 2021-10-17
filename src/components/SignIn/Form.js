import React from "react";
import "./Signin.css";
import PropTypes from "prop-types";
import * as yup from "yup";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("O e-mail deve ser informado"),
  password: yup
    .string()
    .min(4, "A senha deve ter ao menos 4 caracteres")
    .required("A senha do usuário deve ser informada"),
});

function Form({ handleSubmit, initialValues }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <FormikForm className="Form">
          <div>
            <p className="FormTitle">Login</p>
          </div>
          <div className="DivForm">
            <div className="Form-Group">
              <label className="lbSignin">E-mail do Usuário: </label>
              <Field className="Form-Field" name="email" />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="email"
              />
            </div>
            <div className="Form-Group">
              <label className="lbSignin">Senha do Usuário: </label>
              <Field className="Form-Field" name="password" type="password" />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="password"
              />
            </div>
            <br />
            <button className="btLogin" type="submit">
              Login
            </button>
          </div>
        </FormikForm>
      </Formik>
    </>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default Form;
