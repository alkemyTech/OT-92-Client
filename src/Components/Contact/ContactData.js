import React from "react";

export default function datasList() {
  const data = [
    {
      cellphone: "1160112988",
      facebook_url: "www.facebook.com/Somos_Más",
      linkedin_url: "www.linkedin.com/company/somosmas",
      instagram_url: "www.instagram.com/SomosMás",
      twitter_url: "www.twitter.com/somosmas",
    }
  ];

  return (

    <div>
      {data.map(data => {
        return (
          <div className="container">
            <div>
              <div className="card-body border rounded mb-3 mx-5 p-4">
                <p>En esta sección podrás encontrar un mapa con la ubicación de nuestra sede, asi como también un formulario para ponerte en contacto con nosotros.</p>
              </div>
            </div>
          </div>    
        );
      })}
    </div>
  );

}     