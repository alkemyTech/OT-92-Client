import React, { useState } from 'react';

import axios from 'axios'
import EditField from './EditField'
import { Formik, Form, ErrorMessage } from "formik"
import { useParams } from 'react-router'
import * as Yup from "yup";

import '../../Components/FormStyles.css'






export default function TestimonialsForm () {
    const initialValues = { name: "", image: null, description: "", complete: false, id: undefined } 
    const [formValues, setValues] = useState({ name: "", image: null, description: "", complete: false, id: undefined }); 
    
    const { id } = useParams()
    const editTestimonial = `${process.env.REACT_APP_TESTIMONIALS}/${id}` // aquí establecemos los endpoints
    const createTestimonial = `${process.env.REACT_APP_TESTIMONIALS}`   // de la API
    
    const handleSubmit = () => {
      if (!id) {
        axios.post(createTestimonial, {
            name: initialValues.name,
            image: initialValues.image,
            description: initialValues.description
        }).then(res => {
            if (res.status === 200) {
                alert("El testimonio se creó correctamente");
            }
        }).catch(err => {
            alert(err)
        })
      }
      if (id) {
        axios.put(editTestimonial, {
            name: initialValues.name,
            image: initialValues.image,
            description: initialValues.description
        }).then(res => {
            if (res.status === 200) {
                alert("El testimonio se actualizó correctamente");
            }
        }).catch(err => {
            alert(err)
        })
      }
    
    }

    const validationSchema = Yup.object({   //aqu
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