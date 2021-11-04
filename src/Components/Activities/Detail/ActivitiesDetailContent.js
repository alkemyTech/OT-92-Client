import React from 'react'

const ActivitiesDetailContent = ({ body }) => {

    return (
        <div
            dangerouslySetInnerHTML={{__html: body}}
        />
    )
}

export default ActivitiesDetailContent
