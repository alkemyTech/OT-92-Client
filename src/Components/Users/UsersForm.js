import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import '../FormStyles.css';

const UserForm = user => {
  const [initialValues, setInitialValues] = useState({
    id: user.id || '',
    name: user.name || '',
    email: user.email || '',
    roleId: user.role_id || '',
    profilePhoto: user.profile_image || '',
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
    <Formik
      validate={() => {
        const errors = {};
        if (initialValues.name.length <= 4) {
          errors.name = 'El nombre debe contener mínimo cuatro caracteres';
        }
        if (!initialValues.email) {
          errors.email = 'Email obligatorio';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(initialValues.email)
        ) {
          errors.email = 'Por favor, ingrese una dirección de email válida';
        }

        if (!initialValues.roleId) {
          errors.roleId = 'Por favor, asigne un rol al usuario';
        }

        if (!initialValues.profilePhoto) {
          errors.profilePhoto = 'Foto de perfil obligatoria';
        } else if (!/\.(jpe?g|png)$/i.test(initialValues.profilePhoto)) {
          errors.profilePhoto =
            'Por favor, seleccione una imagen con entensión .jpg o .png';
        }
        console.log(errors);
        return errors;
      }}
    >
      {({ errors, isValid, touched }) => (
        <Form className="form-container" onSubmit={handleSubmit}>
          <Field
            className="input-field"
            type="text"
            name="name"
            value={initialValues.name}
            onChange={handleChange}
            placeholder="Nombre"
          ></Field>
          {errors.name && touched.name ? (
            <div className="text-danger">{errors.name}</div>
          ) : null}
          <Field
            className="input-field"
            type="text"
            name="email"
            value={initialValues.email}
            onChange={handleChange}
            placeholder="Email"
          ></Field>
          {errors.email && touched.email ? (
            <div className="text-danger">{errors.email}</div>
          ) : null}
          <Field
            name="roleId"
            as="select"
            value={initialValues.roleId}
            onChange={handleChange}
            className="input-field"
          >
            <option value="" disabled>
              Selecciona el rol
            </option>
            <option value="1">Administrador</option>
            <option value="2">Regular</option>
          </Field>
          {errors.roleId && touched.roleId ? <div>{errors.roleId}</div> : null}
          <Field
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            className="input-field"
            accept={'.jpg, .jpeg, .png'}
          ></Field>
          {errors.profilePhoto && touched.profilePhoto ? (
            <div className="text-danger">{errors.profilePhoto}</div>
          ) : null}
          <button className="submit-btn" type="submit" disabled={!isValid}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
