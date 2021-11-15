import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { useParams, useHistory } from "react-router-dom";
import { membersService } from "../../../../Services/privateApiService";
import * as Yup from "yup";
import "../MembersList.css";

const EditMember = () => {
  const { id } = useParams();
  const history = useHistory();
  const [message, setMessage] = useState('');
  useEffect(() => {
    membersService
      .getMember(id)
      .then((res) => setValues({ updated_at: "", ...res.data.data }))
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required(
      "Es necesario agregar el nombre del nuevo miembro"
    ),
    image: Yup.string().required("La foto del nuevo miembro es esencial"),
    description: Yup.string(),
    facebookURL: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Por favor ingresa un link valido!"
      ),
    linkedinURL: Yup.string()
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
  console.log(values);
  if (values === "") return "Loading...";
  return (
    <>
      <div>
        {" "}
        <p className="h1 my-3 customize-title"> Edita al miembro </p>
        {message && showMessage()}
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            const { name, image, description, facebookURL, linkedinURL } = val;
            const updated_at = new Date();
            setValues({
              name,
              image,
              description,
              facebookURL,
              linkedinURL,
              updated_at,
              ...values.created_at, ...values.deleted_at
            });
            membersService
              .updateMember(values)
              .then((res) => console.log(res))
              .then(history.push("/backoffice/members"))
              .catch((err) => {setMessage(err); console.log(err);  setTimeout(() => {
                setMessage(null);
              }, 2000); });
          }}
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
                Editar Miembro
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditMember;
