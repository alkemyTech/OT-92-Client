import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Document, Page,  pdfjs } from "react-pdf";
import { UserHttp } from "../../Services/UserHttp";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const UserForm = user => {

  const ExtendHttpPetitions = UserHttp(); //import CustomHook UserHttp
  const [serverError, setServerError] = useState(null);
  const [initialValues, setInitialValues] = useState({
    id: user.id || "",
    name: user.name || "",
    email: user.email || "",
    password: user.password || "",
    roleId: user.role_id || "",
    profilePhoto: user.profile_image || "",
  });
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const handleChange = e => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
    }
    if (e.target.name === "roleId") {
      setInitialValues({ ...initialValues, roleId: parseInt(e.target.value) });
    }
  };
  const handleUser = () => {
    console.log(initialValues);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setInitialValues(initialValues);

    if (user.id) {
      try {
        await ExtendHttpPetitions.put({
          url: `http://ongapi.alkemy.org/public/api/users/${initialValues.id}`,
          body: {
            name: initialValues.name,
            email: initialValues.email,
            password: initialValues.password,
            role_id: initialValues.roleId,
            profile_image: initialValues.profilePhoto,
          }
        });
      } catch {
        setServerError("Algo salió mal, por favor intente de nuevo");
      }
    } else {
      try {
        await ExtendHttpPetitions.post({
          url: "http://ongapi.alkemy.org/public/api/users",
          body: {
            name: initialValues.name,
            email: initialValues.email,
            password: initialValues.password,
            role_id: initialValues.roleId,
            profile_image: initialValues.profilePhoto
          }
        });
      } catch {
        setServerError("Algo salió mal, por favor intente de nuevo");
      }
    }
  };

  return (
    <>
      <Formik
        validate={() => {
          const errors = {};
          if (initialValues.name.length < 4) {
            errors.name = "El nombre debe contener mínimo cuatro caracteres";
          }
          if (!initialValues.email) {
            errors.email = "Email obligatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(initialValues.email)
          ) {
            errors.email = "Por favor, ingrese una dirección de email válida";
          }

          if (initialValues.password.length <= 8) {
            errors.password =
            "La contraseña debe contener mínimo ocho caracteres";
          }

          if (!initialValues.roleId) {
            errors.roleId = "Por favor, asigne un rol al usuario";
          }

          if (!initialValues.profilePhoto) {
            errors.profilePhoto = "Foto de perfil obligatoria";
          }
          return errors;
        }}
      >
        {({ errors, isValid, touched }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <Field
              className="input-field"
              type="text"
              name="name"
              value={initialValues.name}
              onChange={handleChange}
              placeholder="Nombre"
            ></Field>
            {errors.name && touched.name ? (
              <div className="text-danger">{errors.name}</div>
            ) : null}
            <Field
              className="input-field"
              type="text"
              name="email"
              value={initialValues.email}
              onChange={handleChange}
              placeholder="Email"
            ></Field>
            {errors.email && touched.email ? (
              <div className="text-danger">{errors.email}</div>
            ) : null}

            <Field
              className="input-field"
              type="password"
              name="password"
              value={initialValues.password}
              onChange={handleChange}
              placeholder="Contraseña"
            ></Field>
            {errors.password && touched.password ? (
              <div className="text-danger">{errors.password}</div>
            ) : null}

            <Field
              name="roleId"
              as="select"
              value={initialValues.roleId}
              onChange={handleChange}
              className="input-field"
            >
              <option value="" disabled>
              Selecciona el rol
              </option>
              <option value="1">Administrador</option>
              <option value="2">Regular</option>
            </Field>
            {errors.roleId && touched.roleId ? <div>{errors.roleId}</div> : null}

            <Field
              name="profilePhoto"
              className="input-field"
              type="file"
              accept={".jpg, .jpeg, .png"}
              onChange={
              //The next callback is crucial in order to convert the file into a base64 string, more info in https://stackoverflow.com/questions/6978156/get-base64-encode-file-data-from-input-form/42647105#42647105
                event => {
                  let file = event.currentTarget.files[0];
                  let reader = new FileReader();
                  reader.readAsBinaryString(file);

                  reader.onload = function () {
                    let codedImg = window.btoa(reader.result);
                    setInitialValues({
                      ...initialValues,
                      profilePhoto: codedImg,
                    });
                  };
                  reader.onerror = function () {
                    console.log("Falló la carga de la imagen");
                  };
                }
              // handleChange
              // event => {
              // setFieldValue('file' , event.currentTarget.files[0]);
              // console.log(event.currentTarget.files[0]);
              // setInitialValues({ ...initialValues, profilePhoto: event.currentTarget.files[0] })
              // }
              }
            />
            {errors.profilePhoto && touched.profilePhoto ? (
              <div className="text-danger">{errors.profilePhoto}</div>
            ) : null}
         
            <button type="button" className="btn btn-primary"  disabled={!isValid} type="submit" data-toggle="modal" data-target="#registrationModal">
            Registrarse
            </button>



            {/* Modal  */}
            <div className="modal fade" id="registrationModal" tabIndex="-1" role="dialog" aria-labelledby="registrationModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h5 className="modal-title" id="registrationModalLabel">Terminos y Condiciones</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-0">
      
                    <Document
                      file="/Somos Mas Terminos y Condiciones.pdf"
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={console.error}
                    >
                      <Page pageNumber={pageNumber} />
                      <div className="d-flex flex-row justify-content-center ">
                        {(pageNumber === 1) ? ("") : (<button onClick={() => setPageNumber(pageNumber - 1)}>
      Anterior
                        </button>)}
        
                        {(pageNumber >= numPages) ? ("") : ( <button onClick={() => setPageNumber(pageNumber + 1 )}>
      Siguiente
                        </button>)}
                      </div>
                      <p>Page {pageNumber} of {numPages}</p>
                    </Document>
     

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">NO ACEPTO</button>       
                    <button className="btn btn-primary submit-btn" data-dismiss="modal" onClick={() => handleUser()} >
            ACEPTO
                    </button> 
                  </div>
                </div>
              </div>
            </div>





            {/* <button className="submit-btn" type="submit" disabled={!isValid}>
            Enviar
          </button> */}
            {initialValues.profilePhoto ? (
              <img
                alt={`${initialValues.name}`}
                src={`data:image/jpeg;base64, ${initialValues.profilePhoto}`}
              />
            ) : null}
            {serverError ? <div>{serverError}</div> : null}
          </Form>
        )}
      </Formik>
      <div>






  
      </div>

    </>



  );
};

export default UserForm;
