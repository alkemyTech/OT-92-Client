import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams, useHistory } from 'react-router-dom'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import EditorField from '../Activities/EditorField';

const SlidesForm = () => {
    let history = useHistory();
    const {option} = useParams();
    const [formType, setFormType] = useState('create')
    const [title, setTitle] = useState('Crear Slide')

    useEffect(() => {
        if(option !== 'edit'){
            history.push('/backoffice/slides-form/create')
        }
        setFormType(option)

        if(option === 'create'){
            setTitle("Crear Slide")
        } else{
            setTitle("Editar Slide")
        }
        
        console.log(formType)
    }, [option])

    const [initialValues, setInitialValues] = useState({
        id: null,
        name: '',
        order: null,
        image: '',
        description: '',
    });

    const validation = Yup.object({
        name: Yup.string()
            .min(4, 'Debe tener por lo menos 4 caracteres')
            .required("Titulo requerido"),
        description: Yup.string()
            .min(25, "Es necesario ingresar por lo menos 25 caracteres")
            .max(300, "Solo se puede introducir hasta 300 caracteres")
            .required("Descripción requerida"),
        image: Yup.mixed()
            .required('Es necesario subir una imagen'),
    });

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } /* if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        } */
    }

    const handleEditorChange = (e, editor) => {
        const data = editor.getData();
        setInitialValues({...initialValues, description: data})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false)
                    }, 400)
                }}
            >
                { formik => (
                    <Form>
                        <input />
                        <ErrorMessage />
                        <input />
                        <ErrorMessage />
                        <input />
                        <ErrorMessage />
                        <EditorField />
                        <button type="submit"></button>
                    </Form>
                )}
            </Formik>
            {/* <form className="form-container" onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
                <CKEditor 
                    editor={ClassicEditor}
                    onChange={handleEditorChange}
                />
                <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write the description"></input>
                <button className="submit-btn" type="submit">Send</button>
            </form> */}
        </>
    );
}
 
export default SlidesForm;