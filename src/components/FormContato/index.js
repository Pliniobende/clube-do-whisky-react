import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../TextField';
import * as Yup from 'yup';
import './FormContato.css'

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        message:''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-1 font-weight-bold .display-1">Contato</h1>
          <Form>
            <TextField label="Nome" name="firstName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Mensagem" name="message" type="text" />
            <button className="btn btn-light mt-3" type="submit">Register</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Signup;