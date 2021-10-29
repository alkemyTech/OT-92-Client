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
    const editTestimonial = `http://ongapi.alkemy.org/public/api/testimonials/${id}`
    const createTestimonial = 'http://ongapi.alkemy.org/api/testimonials'
    const [initialValues, setInitialValues] = useState(testimonialData);

    const handleChange = (e) => { 
      if (e.target.name === 'title') {
          setInitialValues({ ...initialValues, title: e.target.value })
      } 
    }
  
    const handleSubmit = (e) => { 
      
      if (!id) {
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
          axios.put(editTestimonial, {
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
}