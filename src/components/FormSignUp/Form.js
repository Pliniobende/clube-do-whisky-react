import React from "react";
import PropTypes from "prop-types";
import "./Form.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import logo from '../../images/Logo.png';

const validations = yup.object().shape({
  name: yup
    .string()
    .min(5, "O nome do usuário deve ter ao menos 5 caracteres")
    .required("O nome deve ser informado"),
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("O e-mail deve ser informado"),
  password: yup
    .string()
    .min(4, "A senha deve ter ao menos 4 caracteres")
    .required("A senha do usuário deve ser informada"),
  mobile: yup.string(),
});

function Form({ handleSubmit, initialValues }) {
  return (
    <>
    <div className="FormWrapper">
    <img src={logo} alt='logo'/>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <FormikForm className="Form">
          <div className="DivForm">
            <div className="Form-Group">
              <label className="Form-Label">Nome do Usuário: </label>
              <Field className="Form-Field" name="name" />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="name"
              />
            </div>
            <div className="Form-Group">
              <label className="Form-Label">E-mail do Usuário: </label>
              <Field className="Form-Field" name="email" />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="email"
              />
            </div>
            <div className="Form-Group">
              <label className="Form-Label">Senha do Usuário: </label>
              <Field className="Form-Field" name="password" type="password" />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="password"
              />
            </div>
            <div className="Form-Group">
              <label className="Form-Label">Telefone/Celular: </label>
              <Field className="Form-Field" name="mobile" />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="mobile"
              />
            </div>
            <label className="Form-Label">Receber news-letter: </label>
            <div className="Form-Group2">
              <label className="Form-Label">Sim</label>
              <Field
                className="Form-Radio"
                name="newsLetter"
                type="radio"
                value="true"
              />
              <label className="Form-Label">Não</label>
              <Field
                className="Form-Radio"
                name="newsLetter"
                type="radio"
                value="false"
              />
              <ErrorMessage
                className="Form-Error"
                component="span"
                name="mobile"
              />
            </div>
            <button className="Form-Btn" type="submit">
              Signup
            </button>
          </div>
        </FormikForm>
      </Formik>
      ;
      </div>
    </>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default Form;
