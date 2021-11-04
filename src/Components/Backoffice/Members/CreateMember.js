import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./MembersList.css";
const CreateMember = () => {
  const [values, setValues] = useState({
    name: "",
    photo: "",
  });
  const validationSchema = Yup.object({
    name: Yup.string().required(
      "Es necesario agregar el nombre del nuevo miembro"
    ),
    photo: Yup.string().required("La foto del nuevo miembro es esencial"),
  });
  console.log(values);
  return (
    <>
      <div>
        {" "}
        <p className="h1 my-3 customize-title"> Agrega al nuevo miembro </p>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            const { name, photo } = val;
            setValues({ name, photo });
          }}
        >
          {(formik) => (
            <Form className="form-container d-flex flex-column ">
              <label
                className="text-black font-weight-bold form-text"
                htmlFor="name"
              >
                Nombre y Apellido
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  placeholder="Nombre y Apellido"
                />
              </div>
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />
              <label
                className="text-black font-weight-bold form-text"
                htmlFor="photo"
              >
                link de su foto
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="photo"
                  onChange={formik.handleChange}
                  value={formik.values.photo}
                  onBlur={formik.handleBlur}
                  placeholder="Enlace"
                />
              </div>
              <ErrorMessage
                name="photo"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />
              <button
                className="submit-btn align-self-center h3 rounded button-type-letter"
                type="submit"
              >
                Agregar nuevo Miembro
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateMember;
