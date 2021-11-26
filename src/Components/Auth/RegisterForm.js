import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
// import '../FormStyles.css';

const RegisterForm = () => {
  const [serverError, setServerError] = useState(null);

  const [initialValues, setInitialValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = e => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "lastName") {
      setInitialValues({ ...initialValues, lastName: e.target.value });
    }
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
    }
    if (e.target.name === "passwordConfirm") {
      setInitialValues({ ...initialValues, passwordConfirm: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    try {
      console.log(initialValues);
      localStorage.setItem("token", "tokenValueExample");
    } catch {
      setServerError("Ocurrió un error durante el registro");
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={() => {
        const errors = {};
        if (!initialValues.name) {
          errors.name = "Nombre obligatorio";
        }

        if (!initialValues.lastName) {
          errors.lastName = "Apellido obligatorio";
        }

        if (!initialValues.email) {
          errors.email = "Email obligatorio";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(initialValues.email)
        ) {
          errors.email = "Por favor, ingrese una dirección de email válida";
        }

        if (
          !/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/i.test(
            initialValues.password
          )
        ) {
          errors.password =
            "La contraseña debe contener al menos 6 caracteres, una letra, un número y un símbolo";
        }

        if (!initialValues.passwordConfirm) {
          errors.passwordConfirm = "Confirmación de contraseña obligatoria";
        } else if (initialValues.password !== initialValues.passwordConfirm) {
          errors.passwordConfirm = "Las contraseñas deben coincidir";
        }

        return errors;
      }}
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
    >
      {({ errors, isValid, touched }) => (
        <Form
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="mb-3">
            <Field
              type="text"
              name="name"
              className="form-control m-3"
              value={initialValues.name}
              onChange={handleChange}
              placeholder="Nombre"
              style={{ width: "75vw" }}
            ></Field>
            {errors.name && touched.name ? (
              <div className="text-danger m-3">{errors.name}</div>
            ) : null}
            <Field
              type="text"
              className="form-control m-3"
              name="lastName"
              value={initialValues.lastName}
              onChange={handleChange}
              placeholder="Apellido"
              style={{ width: "75vw" }}
            ></Field>
            {errors.lastName && touched.lastName ? (
              <div className="text-danger m-3">{errors.lastName}</div>
            ) : null}
            <Field
              type="email"
              className="form-control m-3"
              id="inputEmail"
              name="email"
              onChange={handleChange}
              value={initialValues.email}
              //   autoComplete="off"
              placeholder="Email"
              style={{ width: "75vw" }}
            />
            {errors.email && touched.email ? (
              <div className="text-danger m-3">{errors.email}</div>
            ) : null}

            <Field
              type="password"
              id="inputPassword"
              onChange={handleChange}
              value={initialValues.password}
              className="form-control m-3"
              name="password"
              placeholder="Contraseña"
              style={{ width: "75vw" }}
            />
            {errors.password && touched.password ? (
              <div className="text-danger m-3">{errors.password}</div>
            ) : null}
            <Field
              type="password"
              id="inputPasswordConfirm"
              onChange={handleChange}
              value={initialValues.passwordConfirm}
              className="form-control m-3"
              name="passwordConfirm"
              placeholder="Vuelve a ingresar la contraseña"
              style={{ width: "75vw" }}
            />
            {errors.passwordConfirm && touched.passwordConfirm ? (
              <div className="text-danger m-3">{errors.passwordConfirm}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-primary m-3"
            disabled={!isValid}
          >
            Registrar
          </button>
          {serverError ? (
            <div className="text-danger m-3">{serverError}</div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
