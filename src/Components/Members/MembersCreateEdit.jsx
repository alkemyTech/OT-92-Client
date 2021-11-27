/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import iconoDeUsuario from "../../Assets/icono-New-User.png";
import imagenMemberFake from "../../Assets/imagen-De-Usuario-Members.jpg";

const Datoimg = {// datos de pruebas
  name: "",
  contenido: "",
  redSocial: ""
};
const datosDePrueba = {// datos de pruebas
  name: "Benito Camela Cabeza Perez",
  contenido: "Soy una descripcion falsa :D",
  redSocial: "https://www.facebook.com/"
};

const MembersCreateEdit = () => {

  const [imagenPerfil, setimagenPerfil] = useState(iconoDeUsuario); //Estado del input de la imagen de perfil
  const [initialValues, setInitialValues] = useState(Datoimg);//Estado de los datos del usuario a editar o crear
  const { id } = useParams();//parametro de consulta para saber si editar o crear un perfil
  const headerRef = useRef();//Referencia que controla el texto del header
  const h3Img = useRef();//Referencia que controla el texto del titulo
  const imgRef = useRef();//Referencia que controla la clase de estilos de la img

  const visualizar_img = (e) => { //maneja la visualizacion previa de la imagen adjuntada
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimagenPerfil(imageUrl);
    imgRef.current.className = "imagen-Perfil-Crear-Members active";

  };

  const envioDeDatos = (values) => {
    const DatoFinal = {
      name: values.name,
      contenido: values.contenido,
      redSocial: values.redSocial,
      img: imagenPerfil
    };
    try {
      alert("Los datos han sido enviados correctamente");
      console.log(DatoFinal);
    } catch (err) {
      if (err.response) {
        let error = err.response.data.error,
          errorStatus = err.response.status;

        alert(`Error ${errorStatus}: ${error}`);
      }
    }

  };

  useEffect(() => {
    id ? headerRef.current.innerText = "Edita el perfil" : headerRef.current.innerText = "Crea tu perfil";
    id ? h3Img.current.innerText = "Edita tu foto" : h3Img.current.innerText = "Agrega una foto";
    if (id) {
      setimagenPerfil(imagenMemberFake);
      setInitialValues(datosDePrueba);
      imgRef.current.className = "imagen-Perfil-Crear-Members active";
    }
  }, []);

  return (
    <div className="padre-Edit">
      <Formik
        enableReinitialize //<= esta madre espera a que los datos esten disponibles
        initialValues={{
          name: initialValues.name ? initialValues.name : "",
          contenido: initialValues.contenido ? initialValues.contenido : "",
          redSocial: initialValues.redSocial ? initialValues.redSocial : ""
        }}
        validate={values => {

          const errors = {};

          if (!values.name) {
            errors.name = "El Nombre no puede estar vacio";
          } else if (values.name.length < 4) errors.name = "El Nombre no puede ser menor a 4 caracteres";
          if (!values.contenido) {
            errors.contenido = "El Contenido no puede estar vacio";
          } else if (values.contenido.length > 500) errors.contenido = "El Contenido es demasiado largo";
          if (!values.redSocial) {
            errors.redSocial = "Es necesaria una red social";
          } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.redSocial)) errors.redSocial = "El link de la red social es incorrecto";

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          envioDeDatos(values);
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form >
            <div className='Padre-Creacion-Edicion-Nuevos-Miembros'>
              <section>
                <h1 style={{ fontSize: "3rem" }} ref={headerRef}></h1>
              </section>
              <label className='label-Create-Edit-Member-Img'>
                <img className="imagen-Perfil-Crear-Members" ref={imgRef} src={imagenPerfil} alt="imagen-Perfil" />
                <h2 ref={h3Img}></h2>
                <input type="file" name="imagen" onChange={visualizar_img} required />
              </label>
              <section style={{ paddingTop: "2rem", width: "80%", textAlign: "center" }}>
                <h2>Nombre</h2>
                <Field
                  className='creacion-Edicion-Members-Nombre'
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" component={() => (
                  <div style={{ color: "red" }}>{errors.name}</div>
                )} />
              </section>
              <section style={{ paddingTop: "2rem", width: "80%", textAlign: "center" }}>
                <h2>Descripcion</h2>
                <Field
                  className='creacion-Edicion-Members-Contenido'
                  as="textarea"
                  name="contenido"
                />
                <ErrorMessage name="name" component={() => (
                  <div style={{ color: "red" }}>{errors.contenido}</div>
                )} />
              </section>
              <section style={{ paddingTop: "2rem", width: "80%", textAlign: "center" }}>
                <h2>Red Social</h2>
                <Field
                  className='creacion-Edicion-Members-Nombre'
                  type="url"
                  name="redSocial"
                />
                <ErrorMessage name="name" component={() => (
                  <div style={{ color: "red" }}>{errors.redSocial}</div>
                )} />
              </section>
              <button className='btn-submit-Crear-Editar-Members' type="submit">Enviar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MembersCreateEdit;
