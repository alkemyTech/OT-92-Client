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
}