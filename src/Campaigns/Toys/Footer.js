
import React from "react";
import "./footer.css";

import {TiSocialFacebook} from "react-icons/ti";
import {TiSocialInstagram} from "react-icons/ti";
import {TiSocialTwitter} from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti";



const Footer = () => {
  return (
    <div>

      <footer className="bg-light text-center text-white">
          
        <div className="container" class="sections">
            
            
          <p className="col text-dark">
              Noticias
          </p>
            
          <p className="col text-dark">
              Actividades
          </p>
            
          <p className="col text-dark">
              Novedades
          </p>        
            
          <a href="/">
            <img src={"http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"} alt=""/>
          </a>

          <p className="col text-dark">
              Testimonios
          </p>  

          <p className="col text-dark">
              Nosotros
          </p>  

          <p className="col text-dark">
              Contacto
          </p>  

        </div>
          
        <div classNameName="container">
          <hr className="bg-dark border-1 border-top border-dark" />
        </div>
          
        <div className="container p-4 pb-0">
        
          <section className="mb-4">
              
            <a
              className="btn "
              style={{backgroundcolor: "#3b5998"}}
              href="#!"
              role="button"
            ><TiSocialFacebook />
            </a>
        
              
            <a
              className="btn "
              style={{backgroundcolor: "#55acee;"}}
              href="#!"
              role="button"
            ><TiSocialTwitter />
            </a>
        
            
            <a
              className="btn "
              style={{backgroundcolor: "#ac2bac;"}}
              href="#!"
              role="button"
            ><TiSocialInstagram />
            </a>
        
              
            <a
              className="btn rounded-circle"
              style={{backgroundcolor: "black"}}
              href="#!"
              role="button"
            ><TiSocialLinkedin />
            </a>
              
          </section>
            
        </div>
          
        
        
        <div className="text-center p-3 text-black" >
            © 2021 by Alkemy {" "}
          <a className="text-black" href="https://alkemy.org">All rights reserved.</a>
        </div>
      </footer>
      
    </div>
  
  );
};
 
export default Footer;