import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../Newsletter/TextInput";


const ButtonMercadoPago = () => {
  
  return (
    <Formik
      initialValues={{
        amount: "",
      }}
      validationSchema={Yup.object({
        amount: Yup.number()
          .min(2, <span className="validations ">Debe tener más de 1 cifra</span>)
          .required(<span className="validations ">Requerido</span>),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          handleSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form id="form-container">
        <div className="my-2 inputs_login">
          <TextInput 
            label="Ingresa un monto"
            name="amount"
            type="number"
            placeholder="$100"
          />
        </div>
        <button className="btn btn-success" type="submit">Donar</button>
      </Form>
    </Formik>
  );
};

export default ButtonMercadoPago;
