import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router'
import '../../Components/FormStyles.css'
import EditField from './EditField'

import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup";



export default function TestimonialsForm () {
    const initialValues = { name: "", image: null, description: "", complete: false, id: undefined } 
    const [formValues, setValues] = useState({ name: "", image: null, description: "", complete: false, id: undefined }); 
    
    const { id } = useParams()
    const editTestimonial = `http://ongapi.alkemy.org/api/testimonials/${id}` // aquí establecemos los endpoints
    const createTestimonial = 'http://ongapi.alkemy.org/api/testimonials'    // de la API
    
    const handleSubmit = () => {
      axios.post(createTestimonial)
    }

    const validationSchema = Yup.object({
         name: Yup.string()
           .required("Se requiere un título")
           .min(4, "El título debe tener al menos cuatro caracteres"),
         description: Yup.string()
           .required("Se requiere una descripción"),
         image: Yup.mixed()
           .required("El testimonio requiere una imagen")
    });

    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            setValues(val);
            handleSubmit();
            console.log(val)
          }}
        >
          {(formik) => (
            <Form className="form-container" >
              <label htmlFor="title" className='label-Title-New-News'>
                  <h2 className="titulo-Titulo-New-News">Título</h2>
                  <input
                      className="input-field"
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                  />
              </label>
              <ErrorMessage
                name="name"
                render={(msg) => (
                    <div style={{color:'red'}}> {msg} </div>
                )}
              />
              
              <h2 >Descripción</h2>
              <EditField formik={formik}/>     {/*acá importamos el componente de editor de CKEditor */}
            

              <input type="file" 
              name="image" 
              accept="image/png, image/jpeg" 
              onChange={(event) => {
                formik.setFieldValue("image", event.target.files[0]);
              }} 
              onBlur={formik.handleBlur} /> 
              
              <ErrorMessage
                name="image"
                render={(msg) => (
                  <div style={{color:'red'}}> {msg} </div>
                )}
              />

              <button className="submit-btn" type="submit">Enviar</button>
            </Form>
          )}
        </Formik>
     </>
    );
}