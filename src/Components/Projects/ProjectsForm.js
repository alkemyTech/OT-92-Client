import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import EditorField from "../Activities/EditorField"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import DatePicker from 'react-date-picker';


const ProjectsForm = () => {
  const [formValues, setValues] = useState({ date: "", name: "", image: null, description: "", complete: false, id: undefined });
  const [isBase64, setBase64] = useState(false)
  const [triggerCreate, setCTrigger] = useState(false)
  const [projectIsReady, setProjectIsReady] = useState(false)
  const [editTrigger, setEditTrigger] = useState(false)
  const initialValues = { date: "", name: "", image: null, description: "", complete: false, id: undefined }



  /* en este useEffect se van a filtrar las actividades, ya sea para
  recibir una nueva como post, como para buscar una por su ID, solo dejo un ejemplo
  para entender como va funcionar. */

  useEffect(() => {
    // parse file to base64 and return it to formState
    const setbase64 = (file) => {
      const metaData = `data:${formValues.image.type}; base64, `
      const reader = new FileReader();
      reader.readAsBinaryString(file)
      reader.onload = () => { setValues({ ...formValues, image: btoa(reader.result) }); setImagenPreview(metaData + btoa(reader.result)) }    //
      setBase64(true)


    }
    if (formValues.image != null && isBase64 === false && formValues.id === undefined) {
      setbase64(formValues.image)
    } else if (formValues.image === null) {
      setBase64(false)
    } else if (formValues.image != null && isBase64 === false && formValues.id !== undefined) {
      const imageUrl = formValues.image;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", imageUrl, true);
      xhr.responseType = "blob"
      xhr.send();
      xhr.onload = () => { setbase64(xhr.response) }
    }

    // create activity
    if (triggerCreate) {
      const createActivity = async () => {
        const queryObject = { name: formValues.name, description: formValues.description, image: formValues.image }
        const url = "http://ongapi.alkemy.org/api/projects"
        const data = await axios.post(url, queryObject)
        try {

          console.log(data)
          console.log(queryObject)
          setCTrigger(false)
        }
        catch (error) {
          console.log(error)
          setCTrigger(false)
        }
      }
      createActivity();
    }

    //edit activity
    if (editTrigger) {
      const putActivity = async () => {
        const queryObject = { name: formValues.name, description: formValues.description, image: formValues.image, id: formValues.id }
        const url = "http://ongapi.alkemy.org/api/projects"
        const data = await axios.put(url, queryObject)
        try {

          console.log(data)
          console.log(queryObject)
          setEditTrigger(false)
        }
        catch (error) {
          console.log(error)
          setEditTrigger(false)
        }
      }
      putActivity();
    }


    // get activity by id
    const paramString = new URLSearchParams(window.location.search);
    const activityID = paramString.get("id")
    if (projectIsReady === false && activityID != null) {
      const getActivity = async () => {
        const url = "http://ongapi.alkemy.org/api/projects/" + activityID;
        let res = await axios.get(url);
        try {
          let data = res.data;
          setValues(data.data)
          setProjectIsReady(true)
        } catch (error) {
          console.log(error)
        }
      }
      getActivity()
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBase64, formValues, triggerCreate])


  // dummy preview
  const [imagenPreview, setImagenPreview] = useState(null)


  // today variables




  /*handler Change de inputs  pd: El componente EditorField
   necesita llevarse el setState/state para realizar cambios */

  // validacion de YUP para formik
  const validate = Yup.object({
    name: Yup.string()
      .required("necesitas ingresar un titulo"),
    description: Yup.string().min(20, "El minimo es de 20 caracteres").max(500, "el maximo es de 500 caracteres").required("Este campo es obligatorio"),
    image: Yup.mixed().required('Necesitas subir una foto'),
    date: Yup.mixed().required("Debes ingresar una fecha")
  });

  const [onDate, setDate] = useState(new Date())

  return (

    // Dar estilos al dummy como una card preview de la actividad pd: El ver actividades debe tener los mismos estilos tanto
    //en mobile como desktop para que la vista previa no difiera en estilos.
    <div className="container">
      <div className="row">
        <div className="">
          <h1 className="">Dummy</h1>
          {imagenPreview === null ? null : <img src={imagenPreview} alt="imagen" accept="image/jpg, image/png" height="200" width="300" />}
          <h3> {formValues.name} </h3>
          <span> {formValues.complete ? "Fecha: " + formValues.date : null} </span>
          <div dangerouslySetInnerHTML={{ __html: formValues.description }}>
          </div>

          {formValues.complete ?
            <>
              <button className="submit-btn" onClick={() => { setCTrigger(true) }}>Crear</button>
              <button className="submit-btn" onClick={() => { setValues(initialValues); setImagenPreview(null) }}>Deshacer Cambios</button>
            </> : projectIsReady ?
              <>
                <button className="submit-btn" onClick={() => { setEditTrigger(true) }}>Editar</button>
                <button className="submit-btn" onClick={() => { setValues(initialValues); setImagenPreview(null); setProjectIsReady(false) }}>Deshacer Cambios</button>
              </> :
              null // boton "Deshacer Cambios" de "Editar" debe redirecciónar la ruta para su buen funcionamiento.

          }
        </div>
      </div>
      <Formik initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => { setValues({ ...values, complete: true, date: values.date.toLocaleDateString() }); setImagenPreview(URL.createObjectURL(values.image)) }}
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

            <DatePicker lang="es-AR" locale={"es-AR"} minDate={new Date} name="date" onChange={e => { formik.setFieldValue("date", e) }} value={formik.values.date} dayPlaceholder="Día" monthPlaceholder="Mes" yearPlaceholder="Año" returnValue="start" dayAriaLabel="Day" />
            <ErrorMessage name="date"
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

export default ProjectsForm;