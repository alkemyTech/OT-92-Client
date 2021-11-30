import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../Newsletter/TextInput";
import axios from "axios";
import { successAlert } from "../../Assets/Alerts/alerts";
import { errorAlert } from "../../Assets/Alerts/alerts";

const ContactForm = () => {

  const contactUrl = "http://ongapi.alkemy.org/api/contacts";

  return (
    <div className="mb-5 border rounded mx-5">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Requerido"),
          email: Yup.string().email("Correo inválido")
            .required("Requerido"),
          phone: Yup.string()
            .matches(/^[0-9]+$/, "Solo se pueden ingresar números")
            .min(8, "Debe tener como mínimo 8 caracteres")
            .required("Requerido - Ingresar solo números"),
          message: Yup.string()
            .required("Requerido")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            axios.post(contactUrl, {
              name: values.name,
              email: values.email,
              phone: (values.phone).toString(),
              message: values.message
            })
              .then(res => successAlert({title: "Petición con exito", time: "2000" }))
              .catch(err => errorAlert({ title: "Error", text: `${err}` }));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-container">
          <h3>Contactanos</h3>
          <TextInput
            label="Nombre y Apellido"
            name="name"
            type="text"
            placeholder="Juan Perez"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="juanperez@gmail.com"
          />
          <TextInput
            label="Telefono"
            name="phone"
            type="number"
            placeholder="12345678"
          />
          <TextInput
            label="Mensaje"
            name="message"
            type="text"
            placeholder="Envíanos tu consulta o mensaje."
          />
          <button className="btn-submit-Crear-Editar-Members btn btn-success" type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
