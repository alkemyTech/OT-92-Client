import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../Newsletter/TextInput';

const ContactForm = () => {
    return (
        <div className="form-container">
            <h3>Contactanos</h3>
            <Formik>
                <Form>
                    <TextInput 
                        label=""
                        name=""
                        type=""
                        placeholder=""
                    />
                    <TextInput 
                        label=""
                        name=""
                        type=""
                        placeholder=""
                    />
                    <TextInput 
                        label=""
                        name=""
                        type=""
                        placeholder=""
                    />
                    <TextInput 
                        label=""
                        name=""
                        type=""
                        placeholder=""
                    />
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm
