import React from "react";
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { NavLink } from 'react-bootstrap';

import "./Login.css"
import Logo from "../images/Logo.png";
import {ErrorMessage, Formik, Form as FormikForm, Field} from 'formik';


const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const Login = ({handleSubmit , initialValues})=>(
    <Formik initialValues = {initialValues} onSubmit={handleSubmit} validationSchema ={validations}>
        <FormikForm className = "Form">
            <img src={Logo} alt="Logo" width = "40%"/>
            <h1 className ="Form-Welcome">Bem Vindo!</h1>
            <h5 className ="Form-Info">Digite Seu email e sua Senha para acessar o Site</h5>
            <div className = "Form-Group">
            <Field className ="Form-Field" name ="user"  placeholder ="email" type ="text" />
            <br/>
            <span className ="Form-Alert">
            <ErrorMessage className ="Form-Error" component ="span" name="user"/>
            </span>
            </div>
            
            <div className = "Form-Group">
            <Field className ="Form-Field" name ="password" placeholder ="Senha" type ="password" />
            <br/>
            <span className ="Form-Alert">
            <ErrorMessage className ="Form-Error" component ="span" name="password"/>
            </span>
            </div>

            <button type="button" class="btn btn-primary">Login</button>
            
            <br/>
            <NavLink>
            <a href="./component/RecuperacaoSenha" class="link-warning">Esqueceu a sua Senha?</a>
            </NavLink>
            
        </FormikForm>
    
    </Formik>       
)

Login.propTypes ={
    initialValues: PropTypes.object.isRequired,
    onsubmit: PropTypes.func.isRequired

}

export default Login;