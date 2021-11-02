import React, { useState } from "react";
import * as Yup from "yup";
import { setLocale } from "yup";
import "./HomeForm.css";
import { Formik, Form, ErrorMessage } from "formik";

const HomeForm = () => {
  const [values, setValues] = useState({
    welcomeTitle: "",
    slide1text: "",
    slide1file: "",
    slide2text: "",
    slide2file: "",
    slide3text: "",
    slide3file: "",
  });
  const validationSchema = Yup.object({
    welcomeTitle: Yup.string()
      .required("Es esencial el texto de bienvenida")
      .min(20, "El texto de bienvenida debe ser de por lo menos 20 caracteres"),
    slide1text: Yup.string().required(
      "Los textos en los slides son obligatorios"
    ),
    slide1file: Yup.mixed().required("El Slide requiere una imagen"),
    slide2text: Yup.string().required(
      "Los textos en los slides son obligatorios"
    ),
    slide2file: Yup.mixed().required("El Slide requiere una imagen"),
    slide3text: Yup.string().required(
      "Los textos en los slides son obligatorios"
    ),
    slide3file: Yup.mixed().required("El Slide requiere una imagen"),
  });

  return (
    <>
      <div className=" container mt-5">
        <h1 className="Home-Form-title">
          {" "}
          Edita desde Aqui el título de bienvenida y los Slides{" "}
        </h1>
      </div>

      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          const {
            welcomeTitle,
            slide1text,
            slide1file,
            slide2text,
            slide2file,
            slide3text,
            slide3file,
          } = val;
          setValues({
            welcomeTitle,
            slide1text,
            slide1file,
            slide2text,
            slide2file,
            slide3text,
            slide3file,
          });
          console.log(values);
        }}
      >
        {(formik) => (
          <Form className="form-container d-flex flex-column ">
            <label
              className="text-black font-weight-bold form-text"
              htmlFor="welcomeTitle"
            >
              Welcome Title
            </label>

            <div className="md-form blue-textarea active-blue-textarea">
              <textarea
                id="welcomeForm"
                rows="3"
                className="md-textarea form-control"
                type="text"
                name="welcomeTitle"
                onChange={formik.handleChange}
                value={formik.values.welcomeTitle}
                onBlur={formik.handleBlur}
                placeholder="Texto de Bienvenida"
              />
            </div>
            <ErrorMessage
              name="welcomeTitle"
              render={(msg) => (
                <div className="bg-danger text-white form-text"> {msg} </div>
              )}
            />
            <label
              className="text-black font-weight-bold form-text"
              htmlFor="slide1text"
            >
              Texto del Slide 1
            </label>
            <input
              className="input-field"
              type="text"
              name="slide1text"
              onChange={formik.handleChange}
              value={formik.values.slide1text}
              onBlur={formik.handleBlur}
              placeholder="Texto de Bienvenida"
            />
            <ErrorMessage
              name="slide1text"
              render={(msg) => (
                <span className="bg-danger text-white form-text"> {msg} </span>
              )}
            />
            <label
              className="block text-black h-2 font-weight-bold form-text"
              htmlFor="file1slide"
            >
              Imagen del Slide 1
            </label>
            <input
              type="file"
              name="slide1file"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                formik.setFieldValue("slide1file", event.target.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage
              name="slide1file"
              render={(msg) => (
                <div className="bg-danger text-white form-text"> {msg} </div>
              )}
            />

            <label
              className="text-black font-weight-bold form-text"
              htmlFor="slide1text"
            >
              Texto del Slide 2
            </label>
            <input
              className="input-field"
              type="text"
              name="slide2text"
              onChange={formik.handleChange}
              value={formik.values.slide2text}
              onBlur={formik.handleBlur}
              placeholder="Texto de Bienvenida"
            />
            <ErrorMessage
              name="slide2text"
              render={(msg) => (
                <span className="bg-danger text-white form-text"> {msg} </span>
              )}
            />
            <label
              className="block text-black h-2 font-weight-bold text-sm font-bold form-text"
              htmlFor="file2slide"
            >
              Imagen del Slide 2
            </label>
            <input
              type="file"
              name="slide2file"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                formik.setFieldValue("slide2file", event.target.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage
              name="slide2file"
              render={(msg) => (
                <div className="bg-danger text-white form-text"> {msg} </div>
              )}
            />

            <label
              className="text-black font-weight-bold form-text"
              htmlFor="slide3text"
            >
              Texto del Slide 3
            </label>
            <input
              className="input-field"
              type="text"
              name="slide3text"
              onChange={formik.handleChange}
              value={formik.values.slide3text}
              onBlur={formik.handleBlur}
              placeholder="Texto de Bienvenida"
            />
            <ErrorMessage
              name="slide3text"
              render={(msg) => (
                <span className="bg-danger text-white form-text"> {msg} </span>
              )}
            />
            <label
              className="block text-black h-2 font-weight-bold text-sm font-bold form-text"
              htmlFor="file3slide"
            >
              Imagen del Slide 3
            </label>
            <input
              type="file"
              name="slide3file"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                formik.setFieldValue("slide3file", event.target.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage
              name="slide3file"
              render={(msg) => (
                <div className="bg-danger text-white form-text"> {msg} </div>
              )}
            />

            <button
              className="submit-btn align-self-center h3 rounded button-type-letter"
              type="submit"
            >
              Cargar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default HomeForm;
