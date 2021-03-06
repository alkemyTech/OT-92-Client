import React from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../Newsletter/TextInput";


const ButtonMercadoPago = () => {
  
  const handleSubmit = async (values) => {

    const URL = "https://api.mercadopago.com/checkout/preferences";

    const data = {
      "items": [
        {
          "title": "Donación ONG 'Somos más'",
          "quantity": 1,
          "unit_price": parseInt(values.amount)
        }
      ],
      "back_urls": {
        "success": "http://localhost:3000/gracias"
      },
      "payment_methods": {
        "excluded_payment_methods": [
          {
            "id": "atm"
          }
        ],
        "excluded_payment_types": [
          {
            "id": "ticket"
          }
        ],
      },
    };

    const headers = { 
      "Authorization": "Bearer TEST-8134026600424593-112515-d86255dec607162e20d1cc7b84b7de84-209760829",
      "Content-Type": "application/json"
    };

    axios.post(URL, data, { headers })
      .then(response => {
        console.log(response.data.sandbox_init_point);
        window.location.href = response.data.sandbox_init_point;
      });
  };

  return (
    <Formik
      initialValues={{
        amount: "",
      }}
      validationSchema={Yup.object({
        amount: Yup.number()
          .min(2, <span className="validations ">Debe ser mayor a $1</span>)
          .required(<span className="validations ">Requerido</span>),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          handleSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="my-3" id="form-container">
        <p>Ingresa un monto:</p>
        <div className="my-2 inputs_login d-flex">
          <TextInput 
            label=""
            name="amount"
            type="number"
            placeholder="$100"
          />
          <button className="btn btn-success mx-3" type="submit">Donar</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ButtonMercadoPago;
