import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'


const validations = yup.object().shape({
    user: yup.string().min(6).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

const Form = ({ handleSubmit, initialValues }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
        <FormikForm className="Form">
            <div className="Form-Group">
                <Field className="Form-Field" name="user" placeholder="Nome do usuário" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="user"/>
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="email" placeholder="E-mail do usuário" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="email"/>
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="password" placeholder="Senha do usuário" type="password"/>
                <ErrorMessage className="Form-Error" component="span" name="password"/>
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </FormikForm>
    </Formik>
)

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default Form