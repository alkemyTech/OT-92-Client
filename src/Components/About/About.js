import React, { useState } from "react";
import Title from "../Title";
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  LinkedinLogin,
  LinkedinAddProfile,
  LinkedinProfile,
  LinkedinShare,
  TwitterButton,
  TwitterTweet,
} from "react-social-plugins";

const About = () => {
  return (
    <div className="p-5">
      <Title content={{ title: "Nosotros" }} />

      <div className="d-flex mt-5 justify-content-center">
        <div
          class="badge-base LI-profile-badge"
          data-locale="es_ES"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="somos-más-a1a817207"
          data-version="v1"
        ></div>

        <div>
          <TwitterTweet
            tweetId="1451372239375540226"
            theme="light"
            width={325}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
