import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css'

function FormComponent({ errors, touched, values, handleSubmit, status }) {
  const [coolForm, setCoolForm] = useState([])
  console.log(coolForm);

  useEffect(() => {
    if (status) {
      setCoolForm([...coolForm, status]);
    }
  }, [status]);

  return(
    <div className="Form">
      <h2>Sign Up</h2>
      <Form>
        <Field type="text" name="name" placeholder="Name" />


        <Field

        />

        <Field

        />
      </Form>
    </div>
  )
}

const FormikFormComponent = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
        name: name || '',
        email: email || '',
        password: password || '',
        tos: tos || false
    };
  },

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://reqres.in/api/users')
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response))
  }
})

export default FormComponent;
