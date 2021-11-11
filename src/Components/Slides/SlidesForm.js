import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams, useHistory } from 'react-router-dom'

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
        name: '',
        description: ''
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
            <h2>{title}</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
                <CKEditor 
                    editor={ClassicEditor}
                    onChange={handleEditorChange}
                />
                {/* <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write the description"></input> */}
                <button className="submit-btn" type="submit">Send</button>
            </form>
        </>
    );
}
 
export default SlidesForm;