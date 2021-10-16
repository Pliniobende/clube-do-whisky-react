import React, {useState, useCallback} from 'react';
import { Formik, Form, Field } from 'formik';
import FormRatings from 'form-ratings';
import axios from 'axios';
import './FormAvaliacao.css'

const FormAvaliacao = () => {

    const initialValues={
        description: "",
        rating: null,
    }

    const [result, setResult] = useState(initialValues);
    const onSubmit = useCallback((values) => setResult(values), []);
    console.log(result)
   /* onSubmit=async (values) => {
      await axios.post('http://localhost:8080/api/v1/reviews/15', values)

      .then (console.log(values))
      .catch((err) => {
          console.log(err)
      });
    }*/
  

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