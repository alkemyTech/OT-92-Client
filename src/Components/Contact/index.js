import React from 'react'
import ContactData from './ContactData'
import GenericTitle from './GenericTitle'

import './index.css'



export default function Contact() {
    return (
        <div>
            <GenericTitle />
            <img src={"http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"} />
            <ContactData />
        </div>
    )
}
