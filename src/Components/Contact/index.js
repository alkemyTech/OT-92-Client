import React from "react";
import ContactData from "./ContactData";
import Title from "../Title";

import "./index.css";

export default function Contact() {
  return (
    <div>
      <Title content={{ title: "Contacto" }} />
      <br />
      <img src={"http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"} />
      <br />
      <ContactData />
    </div>
  );
}
