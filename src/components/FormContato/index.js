import React from "react";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./FormContato.css";



const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    console.log(field)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
  };

export const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(5, "Nome precisa de no mínimo 5 caracteres")
            .required("Esse campo não pode ser vazio"),
          email: Yup.string()
            .email("Email invalido")
            .required("Esse campo não pode ser vazio"),
          message: Yup.string()
            .min(10, "Mensagem precisa de no mínimo 10 caracteres")
            .required("Esse campo não pode ser vazio")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.post('http://localhost:8080/api/v1/prospects', values)

          .then (console.log(values))
          .catch((err) => {
              console.log(err)
          });
          setSubmitting(false);
        }
}
        
        >
        <Form>
        <h2>Contato</h2>
          <MyTextInput
            label="Nome"
            name="name"
            type="text"
            placeholder="Insira seu nome"
          />
          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="email@email.com"
          />
          <MyTextArea
            label="Message"
            name="message"
            type="text-area"
            rows="6"
            placeholder="Insira sua Mensagem"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
  
};

export default ContactForm;