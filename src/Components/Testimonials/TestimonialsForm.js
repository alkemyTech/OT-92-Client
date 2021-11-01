import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router'
import '../../Components/FormStyles.css'
import EditField from './EditField'

import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup";



export default function TestimonialsForm () {
    const testimonialData = {
      name: '',
      content: '',
      image: ''
    } 

    const { id } = useParams()
    const editTestimonial = `http://ongapi.alkemy.org/api/testimonials/${id}` // aquí establecemos los endpoints
    const createTestimonial = 'http://ongapi.alkemy.org/api/testimonials'    // de la API
    const [initialValues, setInitialValues] = useState(testimonialData);

    const handleChange = (e) => { 
      if (e.target.name === 'name') {
          setInitialValues({ ...initialValues, name: e.target.value })
      } if (e.target.content === 'content') {
        setInitialValues({ ...initialValues, content: e.target.value })
      } if (e.target.image === 'image') {
      setInitialValues({ ...initialValues, image: e.target.value })
      } 
    }
  
    const handleSubmit = (e) => { 
      e.preventDefault();

      if (!id) {                        // si no hay id, se crea un testimonio
        axios.post(createTestimonial, {
            name: initialValues.name,
            image: initialValues.image,
            content: initialValues.content
            
        }).then(res => {
            if (res.status === 200) {
                alert('El testimonio se creó correctamente');
                return setInitialValues(testimonialData)
            }
        }).catch(err => {
            alert(err)
        })
      }
    
      if (id) {
          axios.put(editTestimonial, {         //si hay id, se edita el testimonio en cuestión
              name: initialValues.name,
              image: initialValues.image,
              content: initialValues.content
          }).then(res => {
              if (res.status === 200) {
                  alert("El testimonio se actualizó correctamente");
                  return setInitialValues(testimonialData)
              }
          }).catch(err => {
              alert(err)
          })
      }
      
      console.log(initialValues);
    }

    useEffect(() => {

      const EditData = async () => {
          
          if (id) {
              const initialData = await axios.get(editTestimonial),  // acá si existe un id, se hace un GET al enpoint
                  EditNewData = initialData.data.data,               // para editar la info. del testimonio
                  { name, content } = await EditNewData
              if (name) setInitialValues({ ...initialValues, name: name })
              if (content) setInitialValues({ ...initialValues, content: content })
          }
  
      }
  
      EditData()
    }, [])
    
    const validationSchema = Yup.object({
         name: Yup.string()
           .required("Se requiere un título")
           .min(4, "El título debe tener al menos cuatro caracteres"),
         content: Yup.string()
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
          const {
            name,
            content,
            image
          } = val;
          setInitialValues({
            name,
            content,
            image: testimonialData.image.toString('base64')
          });
          console.log(initialValues);
        }}
      >
        {(formik) => (
          <Form className="form-container" onSubmit={handleSubmit} onChange={handleChange}>
          <label htmlFor="title" className='label-Title-New-News'>
              <h2 className="titulo-Titulo-New-News">Título</h2>
              <input
                  className="input-field"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
              ></input>
          </label>
          <ErrorMessage
            name="name"
            render={(msg) => (
                <div style={{color:'red'}}> {msg} </div>
            )}
          />
          
          <h2 >Descripción</h2>
          <EditField name="content"/>     {/*acá importamos el componente de editor de CKEditor */}
          
          <ErrorMessage
            name="content"
            render={(msg) => (
              <div style={{color:'red'}}> {msg} </div>
            )}
          />

          <input 
          type="file"
          name="image"
          onChange={formik.handleChange}
          value={formik.values.image}
          onBlur={formik.handleBlur}
          />
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