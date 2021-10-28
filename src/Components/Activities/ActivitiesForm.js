import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import EditorField from "./EditorField"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const ActivitiesForm = () => {
    const [formValues, setValues] = useState({ name: "", image: null, description: "", complete: false });
    const [initialValues, setInitialValues] = useState({ name: "", image: null, description: "", complete: false })

    /* en este useEffect se van a filtrar las actividades, ya sea para
    recibir una nueva como post, como para buscar una por su ID, solo dejo un ejemplo
    para entender como va funcionar. */
    // useEffect(() => {
    // const activityID = new URLSearchParams(window.location.search); 
    //  const getActivity = ()={ setInitialValues + activityID}
    //     const postActivity = async () => {
    //         const url;
    //         let res = await axios.post(url, values);
    //         try {
    //             let data = res.data;
    //             // sweet alert
    //         } catch (error) {
    //             // sweetalert
    //         }
    //     }
    //  const putActivity = ()=> {formValues + activityID }
    // tener en cuenta que esta seccion tambien debe incluir DELETE
    // }, [input])


    // dummy preview
    const [imagenPreview, setImagenPreview] = useState(null)
    /*handler Change de inputs  pd: El componente EditorField
     necesita llevarse el setState/state para realizar cambios */
    // console.log(formValues)

    // validacion de YUP para formik
    const validate = Yup.object({
        name: Yup.string()
            .required("necesitas ingresar un titulo"),
        description: Yup.string().min(20, "El minimo es de 20 caracteres").max(500, "el maximo es de 500 caracteres").required("Este campo es obligatorio"),
        image: Yup.mixed().required('Necesitas subir una foto'),
    });


    return (

        // Dar estilos al dummy como una card preview de la actividad
        <div className="container">
            <div className="row">
                <div className="">
                    <h1 className="">Dummy</h1>
                    {imagenPreview === null ? null : <img src={imagenPreview} alt="imagen" accept="image/jpg, image/png" height="200" width="300" />}
                    <h3> {formValues.name} </h3>
                    <div dangerouslySetInnerHTML={{ __html: formValues.description }}>
                    </div>
                    {/* 
                    // !!!!!!!!!!!!acá se tiene que agregar otro ternario que evalue si la actividad en evaluacion
                     de ser una actividad existente o una nueva para habilitar botones: Crear/deshacer || borrar/editar!!!!!!!!!!!!! 
                    {formValues.complete ?  <button className="submit-btn" onClick={() => { postActivity }}>Crear actividad?</button>  
                    <button className="submit-btn" onClick={() => { DeleteActivity }}>Eliminar Actividad</button>
                     : null} */}
                </div>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={validate}
                onSubmit={(values) => { setValues({ ...values, complete: true }); setImagenPreview(URL.createObjectURL(values.image)) }}
            >
                {formik => (
                    <Form className="form-container" >
                        <input className="input-field" autoComplete="off"
                            type="text" name="name" onChange={formik.handleChange} value={formik.values.name}
                            onBlur={formik.handleBlur}
                            placeholder="Activity Title"></input>
                        <ErrorMessage name="name"
                            render={(msg) => <span className="error"> {msg} </span>}
                        />
                        <input type="file" name="image" accept="image/png, image/jpeg" onChange={(event) => {
                            formik.setFieldValue("image", event.target.files[0]);
                        }} onBlur={formik.handleBlur} />
                        <ErrorMessage name="image"
                            render={(msg) => <span className="error"> {msg} </span>}
                        />

                        <EditorField formik={formik} />

                        <button className="submit-btn" type="submit" >Send</button>
                    </Form>
                )}

            </Formik>
        </div >

    );
}

export default ActivitiesForm;