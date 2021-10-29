import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router'
import '../../Components/FormStyles.css'

export default function TestimonialsForm () {
    const testimonialData = {
      title: '',
      content: '',
      image: ''
    } 

    const { id } = useParams()
    const editTestimonial = `http://ongapi.alkemy.org/public/api/testimonials/${id}` // aquí establecemos los endpoints
    const createTestimonial = 'http://ongapi.alkemy.org/api/testimonials'            // de la API
    const [initialValues, setInitialValues] = useState(testimonialData);

    const handleChange = (e) => { 
      if (e.target.name === 'title') {
          setInitialValues({ ...initialValues, title: e.target.value })
      } 
    }
  
    const handleSubmit = (e) => { 
      
      if (!id) {                        // si no hay id, se crea un testimonio
        axios.post(createTestimonial, {
            name: initialValues.title,
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
              name: initialValues.title,
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
      e.preventDefault();
      console.log(initialValues);
    }

    useEffect(() => {

      const EditData = async () => {
          
          if (id) {
              const initialData = await axios.get(editTestimonial),  // acá si existe un id, se hace un GET al enpoint
                  EditNewData = initialData.data.data,               // para editar la info. del testimonio
                  { name, content } = await EditNewData
              if (name) setInitialValues({ ...initialValues, title: name })
              if (content) setInitialValues({ ...initialValues, content: content })
          }
  
      }
  
      EditData()
    }, [])

    return (
      <>
          <form className="form-container" onSubmit={handleSubmit}>
              <label htmlFor="title" className='label-Title-New-News'>
                  <h2 className="titulo-Titulo-New-News">Título</h2>
                  <input
                      required
                      className="input-field"
                      type="text"
                      name="title"
                      value={initialValues.title || ''}
                      onChange={handleChange}
                  ></input>
              </label>
              <h2 className="titulo-Content-New-News">Descripción</h2>
              <EditField />     {/*acá importamos el componente del editor de CKEditor */}

              <input type="file" />

              <button className="submit-btn" type="submit">Enviar</button>
          </form>
     </>
    );
}