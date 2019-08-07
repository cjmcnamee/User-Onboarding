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

        <Field type="email" name="email" placeholder="Email" />

        <Field type="password" name="password" placeholder="Password" />

        <label>
          Terms of Service
          <Field
            component="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>

        <button type="submit">Submit</button>
      </Form>

      {coolForm.map(cool => (
        <p key={cool.id}>{cool.name} | {cool.email}</p>
      ))}
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

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response))
  }
})(FormComponent);

export default FormikFormComponent;
