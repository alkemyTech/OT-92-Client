import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import '../FormStyles.css';

const UserForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    roleId: '',
    profilePhoto: '',
  });

  const handleChange = e => {
    if (e.target.name === 'name') {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === 'email') {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === 'roleId') {
      setInitialValues({ ...initialValues, roleId: e.target.value });
    }
    if (e.target.name === 'profilePhoto') {
      setInitialValues({ ...initialValues, profilePhoto: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(initialValues);
  };

  return (
    <Formik>
      <Form className="form-container" onSubmit={handleSubmit}>
        <Field
          className="input-field"
          type="text"
          name="name"
          value={initialValues.name || ''}
          onChange={handleChange}
          placeholder="Name"
        ></Field>
        <Field
          className="input-field"
          type="text"
          name="email"
          value={initialValues.email || ''}
          onChange={handleChange}
          placeholder="Email"
        ></Field>
        <Field
          name="roleId"
          as="select"
          value={initialValues.roleId || ''}
          onChange={handleChange}
          className="input-field"
        >
          <option value="" disabled>
            Selecciona el rol
          </option>
          <option value="admin">Administrador</option>
          <option value="regular">Regular</option>
        </Field>
        <Field
          type="file"
          name="profilePhoto"
          onChange={handleChange}
          className="input-field"
        ></Field>
        <button className="submit-btn" type="submit">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default UserForm;
