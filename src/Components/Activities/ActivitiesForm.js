import React, { useState } from 'react';
import '../FormStyles.css';
import EditorField from "./EditorField"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const ActivitiesForm = (activity) => {
    const [formValues, setValues] = useState({
        name: "" || activity.name,
        image: "https://image.shutterstock.com/image-illustration/asf-original-monogram-logo-design-260nw-1667806693.jpg" || activity.image,
        description: " " || activity.description,
        id: undefined || activity.id
    });
    const [imagenPreview, setImagenPreview] = useState(null)
    const initialValues = {
        name: "" || activity.name,
        image: null || activity.image,
        description: " " || activity.description,
        id: undefined || activity.id
    }

    // parse file to base64 and return it to formState
    const setbase64 = async (file) => {
        if (typeof file === 'object') {
            const metaData = `data:${formValues.image.type}; base64, `
            const reader = new FileReader();
            reader.readAsBinaryString(file)
            reader.onload = () => { setValues({ ...formValues, image: metaData + btoa(reader.result) }); setImagenPreview(metaData + btoa(reader.result)) }    //
        }
        else if (typeof file === "string" && file.length < 150) {
            const res = await axios.get(file, { responseType: 'blob' })
            try {
                setbase64(res.data)
            } catch (error) {
                console.log(error)
            }
        }

    }
    setbase64(formValues.image)



    // validacion de YUP para formik
    const validate = Yup.object({
        name: Yup.string()
            .required("necesitas ingresar un titulo"),
        description: Yup.string().min(20, "El minimo es de 20 caracteres").max(500, "el maximo es de 500 caracteres").required("Este campo es obligatorio"),
        image: Yup.mixed().required('Necesitas subir una foto'),
    });



    // funcion devolver botones 

    const Botonera = () => {
        if (imagenPreview) {
            if (formValues.id === undefined) {
                return (<> <button className="submit-btn" onClick={() => { console.log(formValues) }}>Crear</button>
                    <button className="submit-btn" onClick={() => { setValues(initialValues); setImagenPreview(null) }}>Deshacer Cambios</button>  </>)
            }
            else if (formValues.id !== undefined) {
                return (<>
                    <button className="submit-btn" onClick={() => { console.log("PUTactivitie " + formValues) }}>Editar</button>
                    <button className="submit-btn" onClick={() => { setValues(initialValues) }}>Deshacer Cambios</button>
                </>)
            }
        }


    }

    return (

        <div className="container">
            <div className="row">
                <div className="">
                    <h1 className="">Card Preview</h1>
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
                onSubmit={(values) => { setValues(values); setImagenPreview(URL.createObjectURL(values.image)) }}
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
                        <EditorField formik={formik} initialValue={initialValues.description} />
                        <button className="submit-btn" type="submit" >Send</button>
                    </Form>
                )}

            </Formik>
        </div >

    );
}

export default ActivitiesForm;