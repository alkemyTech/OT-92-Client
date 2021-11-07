import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../Newsletter/TextInput';

const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Requerido'),
                    email: Yup.string().email('Correo inválido')
                        .required('Requerido'),
                    phone: Yup.number()
                        .min(8, "Debe tener como mínimo 8 caracteres")
                        .required('Requerido'),
                    message: Yup.string()
                        .required('Requerido')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false)
                    }, 400)
                }}
            >
                <Form className="form-container">
                    <h3>Contactanos</h3>
                    <TextInput 
                        label="Nombre y Apellido"
                        name="name"
                        type="text"
                        placeholder="Juan Perez"
                    />
                    <TextInput 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="juanperez@gmail.com"
                    />
                    <TextInput 
                        label="Telefono"
                        name="phone"
                        type="number"
                        placeholder="12345678"
                    />
                    <TextInput 
                        label="Mensaje"
                        name="message"
                        type="text"
                        placeholder="Envíanos tu consulta o mensaje."
                    />
                </Form>
            </Formik>
        </>
    )
}

export default ContactForm
