import React from 'react'

const ActivitiesDetailContent = ({ body }) => {

    return (
        <div
            id="activitiesDetailContent" //Estilo usando App.scss
            dangerouslySetInnerHTML={{__html: body}}
        />
    )
}

export default ActivitiesDetailContent
