import React, { useState } from 'react';
import '../FormStyles.css';

import axios from 'axios';
import EditorField from "../Activities/EditorField";
import { Formik, Form, ErrorMessage } from 'formik';
import {useParams} from 'react-router'
import * as Yup from "yup";


const CategoriesForm = () => {
  const {id} = useParams
  const [initialValues, setInitialValues] = useState({
    name: "",
    id: id || "",  
    image: "",
    description: ""
  });
  

  const handleSubmit = (e) => {
      e.preventDefault()
      
      if(!id) {  //if there's no ID, we make a POST request to create a category
          axios.post('http://ongapi.alkemy.org/api/categories', initialValues)
      }
      if(id) {  //if there is an ID, we make a PUT request to edit a category
        axios.put(`http://ongapi.alkemy.org/api/categories/${id}`, initialValues)
      }
  }

  const handleChange = (e) => {
     if(e.target.name === 'name') {
       setInitialValues({... initialValues, name: e.target.value});
       console.log(e.target.value)
     }
  }

  // validaciones de YUP para el form
  const validate = Yup.object({
    name: Yup.string()
      .required("Se requiere un nombre")
      .min(4, "Se requieren al menos cuatro caracteres"),
    description: Yup.string()
      .required("Este campo es obligatorio"),
    image: Yup.mixed().required('Es necesario subir una foto'),
  });

  return (

    <div className="container">

      <Formik initialValues={initialValues}
        validationSchema={validate}
        enableReinitialize={true}
        onSubmit={(values) => { setInitialValues({ ...values }) }}
      >
        {formik => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" autoComplete="off"
              type="text" name="name" onChange={handleChange} value={initialValues.name}
              onBlur={formik.handleBlur}
              placeholder="Nombre" 
            />
            
            <ErrorMessage name="name"
              render={(msg) => <span className="error"> {msg} </span>}
            />

            <EditorField                              //imported the CKEditor's editor component
              formik={formik} 
              initialValues={initialValues.description}
              setInitialValues={setInitialValues} 
              name="description"
              value={initialValues.description} 
              onChange={handleChange} 
            />

            <input 
              type="file" 
              name="image" 
              accept="image/png, image/jpeg" 
              onChange= {event => {                       //here we transform the file to base64
                  let file = event.currentTarget.files[0];
                  let reader = new FileReader();
                  reader.readAsBinaryString(file);

                  reader.onload = function () {
                    let codedImg = window.btoa(reader.result);
                    setInitialValues({
                      ...initialValues,
                      image: codedImg,
                    });
                  };
                  reader.onerror = function () {
                    console.log('Falló la carga de la imagen');
                  };
              }}
            />
            
            <ErrorMessage name="image"
              render={(msg) => <span className="error"> {msg} </span>}
            />

            <button className="submit-btn" type="submit" >Enviar</button>
          </Form>
        )}
      </Formik>
    </div >

  );
}

export default CategoriesForm;