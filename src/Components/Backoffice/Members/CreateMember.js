import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./MembersList.css";
import {useDispatch} from "react-redux";
import {addMember, addMemberAsync} from "../../../store/members/membersSlice";
import { formatRelative, subDays } from "date-fns";
const CreateMember = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    image: "",
    description: "",
    facebookURL: "",
    linkedinURL: "",
  });
  const validationSchema = Yup.object({
    name: Yup.string().required(
      "Es necesario agregar el nombre del nuevo miembro"
    ),
    image: Yup.string().required("La foto del nuevo miembro es esencial"),
    description: Yup.string().required("El usuario debe tener una descripción"),
    facebookURL: Yup.string()
      .required("El usuario debe adjuntar su perfil de facebook")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Por favor ingresa un link valido!"
      ),
    linkedinURL: Yup.string()
      .required("El usuario debe adjuntar su perfil de linkedin")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Por favor ingresa un link valido!"
      ),
  });

  const showMessage = () => {
    return (
      <div className="bg-dark text-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{message}</p>
      </div>
    );
  };
  return (
    <>
      <div>
        {" "}
        <p className="h1 my-3 customize-title"> Agrega al nuevo miembro </p>
        {showMessage() && message}
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={ async val => {
            const { name, image, description, facebookURL, linkedinURL } = val;
            const created_at = formatRelative(subDays(new Date(), 3), new Date());
            await setValues({
              name,
              image,
              description,
              facebookURL,
              linkedinURL
            });
            console.log(values);
            console.log(dispatch(addMember({name,
              image,
              description,
              facebookURL,
              linkedinURL
            })));
            let newMember = {...val, created_at};
            try {
              await dispatch(addMemberAsync(newMember));
            } catch (error) {
              setMessage(error);
              setTimeout(() => {
                setMessage(null);
              }, 2000);
            }}}
        >
          {(formik) => (
            <Form className="form-container d-flex flex-column ">
              <label
                className="text-black font-weight-bold form-text"
                htmlFor="name"
              >
                Nombre y Apellido
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  placeholder="Nombre y Apellido"
                />
              </div>
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />
              <label
                className="text-black font-weight-bold form-text"
                htmlFor="image"
              >
                link de su foto
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="image"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                  onBlur={formik.handleBlur}
                  placeholder="Enlace"
                />
              </div>
              <ErrorMessage
                name="image"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />
              <label
                className="text-black font-weight-bold form-text"
                htmlFor="description"
              >
                Descripción
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  placeholder="Un poco sobre este miembro"
                />
              </div>
              <ErrorMessage
                name="description"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />

              <label
                className="text-black font-weight-bold form-text"
                htmlFor="facebookURL"
              >
                Facebook
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="facebookURL"
                  onChange={formik.handleChange}
                  value={formik.values.facebookURL}
                  onBlur={formik.handleBlur}
                  placeholder="link de su perfil de Facebook"
                />
              </div>
              <ErrorMessage
                name="facebookURL"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />
              <label
                className="text-black font-weight-bold form-text"
                htmlFor="linkedinURL"
              >
                Linkedin
              </label>
              <div className="md-form blue-textarea active-blue-textarea">
                <input
                  className="input-field"
                  type="text"
                  name="linkedinURL"
                  onChange={formik.handleChange}
                  value={formik.values.linkedinURL}
                  onBlur={formik.handleBlur}
                  placeholder="link de su perfil de Linkedin"
                />
              </div>
              <ErrorMessage
                name="linkedinURL"
                render={(msg) => (
                  <div className="bg-danger text-white form-text"> {msg} </div>
                )}
              />
              <button
                className="submit-btn align-self-center h3 rounded button-type-letter mt-3"
                type="submit"
              >
                Agregar nuevo Miembro
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateMember;
