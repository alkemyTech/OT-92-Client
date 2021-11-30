import React from "react";
import ContactData from "./ContactData";
import Title from "../Title";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

import "./index.css";

export default function Contact() {
  return (
    <div className='container mt-5'>
      <Title content={{ title: "Contacto" }} />
      <br />
      <ContactData />
      <div className='d-flex justify-content-center mb-5 pt-3'>
        <ContactMap />
      </div>
      <ContactForm />
    </div>
  );
}
