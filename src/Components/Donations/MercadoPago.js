import React,{useEffect} from "react";
import mercadopago from "mercadopago";






const MercadoPago = () => {



  const mp = new MercadoPago("TEST-0af01477-03cf-4e20-8284-6bc07fade53b", {
    locale: "es-AR"
  });
  mp.configure({
    sandbox: true,
    access_token: "TEST-6800333711589930-110210-14084d879a2c791866ae922a35cc80b3-221409634"
  });

  let preference = {
    items: [
      {
        title: "Quiero donar",
        unit_price: 100,
        quantity: 1,
      }
    ],
    back_urls: {
      "success": "http://localhost:3000/donaciones/feedback",
      "failure": "http://localhost:3000/donaciones/feedback",
      "pending": "http://localhost:3000/donaciones/feedback"
    },
    auto_return: "approved",
  };
  mp.preferences.create(preference)
    .then(function(response){
      // Este valor reemplazará el string "$$init_point$$" en tu HTML
      global.init_point = response.body.init_point;
    }).catch(function(error){
      console.log(error);
    });

  //    mp.checkout({
  //       preference: {
  //           id: '1'
  //       },
  //       render: {
  //             container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
  //             label: 'Pagar', // Cambia el texto del botón de pago (opcional)
  //       }
  // });

  //   const script = document.createElement("script");
  //     script.src = "https://sdk.mercadopago.com/js/v2";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   // Inicializa el checkout
  //  const checkout = mp.checkout({
  //       preference: {
  //           id: 'YOUR_PREFERENCE_ID'
  //       },
  //       render: {
  //             container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
  //             label: 'Pagar', // Cambia el texto del botón de pago (opcional)
  //       }
  // });
  // // Invocando la función posteriormente
  // checkout.render({
  //     container: '.cho-container',
  //     label: 'Pagar'
  // });
  
  //    mercadopago.preferences.create(preference)
  //               .then(function(response){
  //               // Este valor reemplazará el string "$$init_point$$" en tu HTML
  //                 global.init_point = response.body.init_point;
  //               }).catch(function(error){
  //                 console.log(error);
  //               });
  return (
    <>
      <div className="cho-container" id="order-actions"></div>
      <button className="btn btn-primary" onClick={this.pagar} className="mr-1 d-inline">
  Pagar
      </button>
    </>
  );
};
export default MercadoPago;
