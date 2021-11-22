import React, { useState, useEffect } from "react";
import "../FormStyles.css";
import { useParams } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import EditorField from "../Activities/EditorField";
import { slidesService } from "../../Services/publicApiService";
import axios from "axios";

const SlidesForm = () => {
  const {id} = useParams();
  const [title, setTitle] = useState("Crear");
  const [initialValues, setInitialValues] = useState({
    id: id || undefined,
    name: "",
    order: "",
    image: "",
    description: "",
  });
    
  // Funciones para submitear:
  const edit = (id) => {
    slidesService("edit", initialValues);
    console.log("Editado");
  };

  const create = () => {
    slidesService("create", initialValues);
    console.log("Creado");
  };

  const [submitFunction, setSubmitFunction] = useState(undefined);

  useEffect(() => {
    if(id){
      setTitle("Editar");
    } if(!id){
      setTitle("Crear");
    }
  }, [id]);

  const validation = Yup.object({
    name: Yup.string()
      .min(4, "Debe tener por lo menos 4 caracteres")
      .required("Titulo requerido"),
    description: Yup.string()
      .min(25, "Es necesario ingresar por lo menos 25 caracteres")
      .max(300, "Solo se puede introducir hasta 300 caracteres")
      .required("Descripción requerida"),
    image: Yup.mixed()
      .required("Es necesario subir una imagen"),
    order: Yup.number()
      .required("El numero de orden es obligatorio")
  });

  const setbase64 = async (file) => {
    if (typeof file === "object" && !!file) {
      const metaData = `data:${initialValues.image.type}; base64, `;
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => { setInitialValues({ ...initialValues, image: metaData + btoa(reader.result) }); };
    }
    else if (typeof file === "string" && file.length < 150) {
      const res = await axios.get(file, { responseType: "blob" });
      try {
        setbase64(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  setbase64(initialValues.image);

  const handleSubmit = (e) => {
    if(id){
      setTitle("Editar");
      edit(id);
    } if(!id){
      setTitle("Crear");
      create();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => { setInitialValues(values); console.log(values); handleSubmit(); }}
        enableReinitialize={true}
      >
        { formik => (
          <Form className="form-container">
            <h2>{title} Slide {id}</h2>
            <input 
              className="input-field"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Titulo de Slide"
            />
            <ErrorMessage 
              name="name"
              render={msg => <span className="error_message_input"> {msg} </span>}
            />
            <input 
              className="input-field"
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                formik.setFieldValue("image", event.target.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage 
              name="image"
              render={msg => <span className="error_message_input"> {msg} </span>}
            />
            <input 
              className="input-field"
              type="number"
              name="order"
              onChange={formik.handleChange}
              value={formik.values.order}
              onBlur={formik.handleBlur}
              placeholder="Orden de Slide"
            />
            <ErrorMessage
              name="order"
              render={msg => <span className="error_message_input"> {msg} </span>}
            />
            <EditorField 
              formik={formik}
              initialValues={initialValues.description}
              setInitialValues={setInitialValues}
            />
            <button className="submit-btn" type="submit" >Enviar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
 
export default SlidesForm;