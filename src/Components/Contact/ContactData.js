import React from 'react'

export default function datasList() {
    const data = [
        {
            cellphone: "1160112988",
            facebook_url: "www.facebook.com/Somos_Más",
            linkedin_url: "www.linkedin.com/company/somosmas",
            instagram_url: "www.instagram.com/SomosMás",
            twitter_url: "www.twitter.com/somosmas",
            logo: "http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"
        }
    ]

    return (

        <div>
            {data.map(data => {
                return (
                    <div className="container">
                        <div>
                            <div className="card-body">
                                <img src={data.logo} />
                                <h5>Celular: {data.cellphone}</h5>
                                <li><a href="www.facebook.com/Somos_Más">{data.facebook_url}</a></li>
                                <li><a href="www.linkedin.com/company/somosmas" >{data.linkedin_url}</a></li>
                                <li><a href="www.instagram.com/SomosMás" >{data.instagram_url}</a></li>
                                <li><a href="www.twitter.com/somosmas" >{data.twitter_url}</a></li>
                            </div>
                       </div>
                   </div>    
                )
            })}
        </div>
    )

}     