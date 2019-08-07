import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

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
      <Form className="Form2">
        <h2>Cool Form</h2>
        <Field className="input" type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}

        <Field className="input" type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}

        <Field className="input" type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

        <label className="checkbox">
          Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>

        <button className="input" type="submit">Submit</button>
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
