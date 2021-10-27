import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../FormStyles.css';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email Invalido').required('Requerido'),
      password: Yup.string()
        .required('Requerida')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        //Regex que valida que la contraseña tenga al menos una letra, un caracter especial y un numero
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
          'La contraseña debe tener una letra, un número y un caracter especial'
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='form-group'>
      <h1 className='h1 text-center mt-5'> Login </h1>
      <form
        className='form-container'
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <div>
          <label htmlFor='email ' className='form-label'>
            Email
          </label>
          <input
            className={
              formik.touched.email && formik.errors.email
                ? 'w-100 form-control is-invalid'
                : 'w-100 form-control'
            }
            type='email'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese email'
            required
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div className='text-danger position-absolute mt-1'>
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className='mt-4'>
          <label htmlFor='password' className='form-label'>
            Contraseña
          </label>
          <input
            required
            className={
              formik.touched.password && formik.errors.password
                ? 'w-100 form-control is-invalid'
                : 'w-100 form-control'
            }
            type='password'
            id='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese contraseña'
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div className='text-danger position-absolute w-75'>
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <button className='btn btn-primary mt-5' type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
