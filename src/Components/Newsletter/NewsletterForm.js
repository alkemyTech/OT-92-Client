import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';

export const NewsletterForm = () => {
    return (
                    <>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                            }}
                            validationSchema={Yup.object({
                                firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                                lastName: Yup.string()
                                    .max(20, "Debe tener 20 caracteres o menos")
                                    .required('Requerido'),
                                email: Yup.string().email('Correo inválido')
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
                                <h4 id="titleNewsletter">Suscribite a nuestro newsletter 📩</h4>
                                <TextInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Juan"
                                />
                                <TextInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    placeholder="Pérez"
                                />
                                <TextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="juan_perez@gmail.com"
                                />
                                <button className="submit-btn" type="submit">Suscribirme</button>
                            </Form>
                        </Formik>
                    </>
    )
}

export default NewsletterForm;
