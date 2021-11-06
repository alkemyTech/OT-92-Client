import React, { useState } from 'react';
import '../FormStyles.css';
import DatePicker from 'react-date-picker';
import EditorField from "../Activities/EditorField";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const ProjectsForm = (project) => {
  const [formValues, setValues] = useState({
    name: project.name || "",
    image: project.image || null,
    description: project.description || "",
    id: project.id || undefined,
    due_date: project.due_date || ""
  });
  const [imagenPreview, setImagenPreview] = useState(null)
  const initialValues = {
    name: project.name || "",
<<<<<<< HEAD
    image: project.image || "",
=======
    image: project.image || null,
>>>>>>> d3946610ce717718315b74a04d7c3c6e82f590c9
    description: project.description || "",
    id: project.id || undefined,
    due_date: project.due_date || ""
  }

  // parse file to base64 and return it to formState
  const setbase64 = async (file) => {
    if (typeof file === 'object' && !!file) {
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
    description: Yup.string().min(20, "El minimo es de 20 caracteres").required("Este campo es obligatorio"),
    image: Yup.mixed().required('Necesitas subir una foto'),
    date: Yup.mixed().required("Debes ingresar una fecha")
  });

  console.log(formValues)

  // funcion devolver botones 

  const Botonera = () => {
    if (imagenPreview) {
      if (formValues.id === undefined) {
        return (<> <button className="submit-btn" onClick={() => { console.log(formValues) }}>Crear</button>
          <button className="submit-btn" onClick={() => { setValues(initialValues); setImagenPreview(null) }}>Deshacer Cambios</button>  </>)
      }
      else if (formValues.id !== undefined) {
        return (<>
          <button className="submit-btn" onClick={() => { console.log("PUTproject " + formValues) }}>Editar</button>
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
          {imagenPreview === null ? null : <> <img src={imagenPreview} alt="imagen" accept="image/jpg, image/png" height="200" width="300" />
            <h4> Fecha: </h4><span> {formValues.due_date} </span> </>}
          <h3> {formValues.name} </h3>
          <div dangerouslySetInnerHTML={{ __html: formValues.description }}>
          </div>

          {Botonera()}

        </div>
      </div>
      <Formik initialValues={initialValues}
        validationSchema={validate}
        enableReinitialize={true}
        onSubmit={(values) => { setValues({ ...values, due_date: values.date.toLocaleDateString() }); setImagenPreview(URL.createObjectURL(values.image)) }}
      >
        {formik => (
          <Form className="form-container" >
            <input className="input-field" autoComplete="off"
              type="text" name="name" onChange={formik.handleChange} value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="project Title"></input>
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

            <EditorField formik={formik} initialValue={initialValues.description} />


            <button className="submit-btn" type="submit" >Send</button>
          </Form>
        )}
      </Formik>
    </div >

  );
}
export default ProjectsForm;