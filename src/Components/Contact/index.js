import React from "react";
import ContactData from "./ContactData";
import Title from "../Title";
import ContactMap from "./ContactMap";

import "./index.css";

export default function Contact() {
  return (
    <div className='container mt-5'>
      <Title content={{ title: "Contacto" }} />
      <br />
      <img
        src={"http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"}
        alt='somos mas logo'
      />
      <br />
      <ContactData />
      <div className='d-flex justify-content-center mb-5 pt-3'>
        <ContactMap />
      </div>
    </div>
  );
}
