import React from "react";
import logoFb from "../../Assets/fb_icon-icons.com_65434.png";
import logoTwitter from "../../Assets/twitterLogo.png";
import logoLinkedin from "../../Assets/linkedinLogo.png";
import logoIg from "../../Assets/instagramLogo.png";

const FooterRedirections = ({dataOrg}) => {
  return (
    <div>
      <a href="https://www.facebook.com/Somos_Más">
        <img className="img-Footer-School" src={logoFb} alt="icono-Facebook" />
        <p>{dataOrg.facebook_url}</p>
      </a>
      <a href="https://www.instagram.com/SomosMás">
        <img className="img-Footer-School" src={logoIg} alt="icono-Instagram" />
        <p>{dataOrg.instagram_url}</p>
      </a>
      <a href="https://www.linkedin.com/company/somosmas">
        <img className="img-Footer-School" src={logoLinkedin} alt="icono-Linkedin" />
        <p>{dataOrg.linkedin_url}</p>
      </a>
      <a href="https://www.twitter.com/somosmas">
        <img className="img-Footer-School" src={logoTwitter} alt="icono-Twitter" />
        <p>{dataOrg.twitter_url}</p>
      </a>
    </div>
  );
};

export default FooterRedirections;
