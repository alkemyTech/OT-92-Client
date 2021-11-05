import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import EditorField from "./EditorField"
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const ActivitiesForm = () => {
    const [formValues, setValues] = useState({ name: "", image: null, description: "", complete: false, id: undefined });
    const [isBase64, setIsBase64] = useState(false)
    const [imagenPreview, setImagenPreview] = useState(null)
    const [initialValues, setInitialValues] = useState({ name: "", image: null, description: "", complete: false, id: undefined })
    const [descriptionValue, setDescriptionValue] = useState("")
    const [formIsComplete, isComplete] = useState(false);
    const [TriggerEditar, setTriggerEditar] = useState(false)
    const [activityIsReady, setactivityIsReady] = useState(false)
    const [renderNewCK, setrenderNewCK] = useState(false)



    /* en este useEffect se van a filtrar las actividades, ya sea para
    recibir una nueva como post, como para buscar una por su ID, solo dejo un ejemplo
    para entender como va funcionar. */

    useEffect(() => {
        // parse file to base64 and return it to formState
        const setbase64 = (file) => {
            console.log(typeof file)
            // const metaData = `data:${formValues.image.type}; base64, `
            // const reader = new FileReader();
            // reader.readAsBinaryString(file)
            // reader.onload = () => { setValues({ ...formValues, image: metaData + btoa(reader.result) }); setImagenPreview(metaData + btoa(reader.result)) }    //
            // setIsBase64(true)
        }
        if (formValues.image != null && isBase64 === false && formValues.id === undefined) {
            setbase64(formValues.image)
        } else if (formValues.image != null && isBase64 === false && formValues.id !== undefined) {
            const imageUrl = formValues.image;
            setbase64(imageUrl)
        }



        /// get activity



        const paramString = new URLSearchParams(window.location.search);
        const activityID = paramString.get("id")
        if (activityID != null && activityIsReady === false) {
            const getActivity = async () => {
                const url = "http://ongapi.alkemy.org/api/activities/" + activityID;
                let res = await axios.get(url);
                try {
                    let data = res.data;
                    setValues(data.data)
                    setactivityIsReady(true)
                    setImagenPreview(formValues.image)
                    setrenderNewCK(true)
                    setInitialValues(data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            getActivity()
            setDescriptionValue(formValues.description)
        }
        setrenderNewCK(true)
        setDescriptionValue(formValues.description)





    }



        , [isBase64, formValues])


    // dummy preview




    // validacion de YUP para formik
    const validate = Yup.object({
        name: Yup.string()
            .required("necesitas ingresar un titulo"),
        description: Yup.string().min(20, "El minimo es de 20 caracteres").max(500, "el maximo es de 500 caracteres").required("Este campo es obligatorio"),
        image: Yup.mixed().required('Necesitas subir una foto'),
    });



    // funcion devolver botones 

    const Botonera = () => {
        if (formIsComplete) {
            if (formValues.id === undefined) {
                return (<> <button className="submit-btn" onClick={() => { }}>Crear</button>
                    <button className="submit-btn" onClick={() => { setValues(initialValues); setImagenPreview(null) }}>Deshacer Cambios</button>  </>)
            }
            else if (formValues.id !== undefined) {
                return (<>
                    <button className="submit-btn" onClick={() => { setTriggerEditar(true) }}>Editar</button>
                    <button className="submit-btn" onClick={() => { setValues({ name: "", image: null, description: "", complete: false, id: undefined }); setImagenPreview(null) }}>Deshacer Cambios</button>
                </>)
            }
        }


    }

    // funcion CKEditor 
    const CKEditorLoader = (formik) => {

        if (renderNewCK && formValues.id != undefined) {
            return (<EditorField formik={formik} initialValue={descriptionValue} />
            )
        }

    }

    return (

        // Dar estilos al dummy como una card preview de la actividad pd: El ver actividades debe tener los mismos estilos tanto
        //en mobile como desktop para que la vista previa no difiera en estilos.
        <div className="container">
            <div className="row">
                <div className="">
                    <h1 className="">Dummy</h1>
                    {imagenPreview === null ? null : <img src={imagenPreview} alt="imagen" accept="image/jpg, image/png" height="200" width="300" />}
                    <h3> {formValues.name} </h3>
                    <div dangerouslySetInnerHTML={{ __html: formValues.description }}>
                    </div>

                    {Botonera()}

                </div>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={validate}
                enableReinitialize={true}
                onSubmit={(values) => { isComplete(true); setImagenPreview(URL.createObjectURL(values.image)) }}
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
                        {CKEditorLoader(formik)}

                        <button className="submit-btn" type="submit" >Send</button>
                    </Form>
                )}

            </Formik>
        </div >

    );
}

export default ActivitiesForm;