import React from 'react';
import Form from './Form';
import usersServices from '../../services/users.services';

const handleSubmit = values => {

    usersServices.signup(values)
    .then(response => {
      alert('Usuario cadastrado com sucesso!');
    })
    .catch(e => {
      e.response.data ? alert(e.response.data) : alert(e);
      console.log(e);
    })
}

const initialValues = {}

export default () => {
    return (
        <div>
            <Form handleSubmit={handleSubmit} initialValues={initialValues}/>
        </div>
    )
}
//export default Form;