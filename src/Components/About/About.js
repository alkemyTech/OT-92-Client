import React from "react";
import Title from "../Title";
import { TwitterTweet } from "react-social-plugins";

const About = () => {
  return (
    <div className="p-5">
      <Title content={{ title: "Nosotros" }} />

      <div className="d-flex mt-5 justify-content-center">
        <div
          className="badge-base LI-profile-badge mt-3"
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
