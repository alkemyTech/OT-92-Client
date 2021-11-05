import React from 'react'

export default function GenericTitle() {
    const contacto = {title: 'Contacto'}
    const titles = [contacto]

    return (
        <div>
            {titles.map(title => {
                return (
                    <h1>{title.title}</h1>
                )
            })}
        </div>
    )
}
