import React, {useState, useCallback, useContext} from 'react';
import { Formik, Form, Field } from 'formik';
import FormRatings from 'form-ratings';
import { UserProvider } from '../../providers/user';
import axios from 'axios';
import './FormAvaliacao.css'

const FormAvaliacao = () => {
    const auth = useContext(UserProvider);
    const initialValues={
        description: "",
        rating: null,
    }

    const [result, setResult] = useState(initialValues);
    /*const onSubmit = useCallback((values) => setResult(values), []);
    console.log(result)*/
    const onSubmit= async (values) => {
      const newvalues = {rating: values.rating, description: values.description,  userId:1, brandId:5}
      await axios.post('http://localhost:8080/api/v1/reviews/5', newvalues)
      .then (console.log(newvalues))
      .catch((err) => {
          console.log(err)
      });
      console.log(newvalues)
    }
    return (
    <>
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
    >
    {({ errors, touched }) => (
      <Form>
        <div>
          <p>Nota</p>
          <Field name="rating" as={FormRatings} />
        </div>
        <div>
          <p>Escreva uma avaliação</p>
          <Field name="description" component="textarea" rows="6"/>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </Form>
    )}
    </Formik>     
    </>
    )
}

export default FormAvaliacao;