import React from "react";
import background from "../../Assets/background-img-title.png";

const Title = ({ content }) => {
  const { title, image } = content;
  let imageUrl = image ? image : background;

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "70% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="h1 display-2 text-center">{title}</h1>
    </div>
  );
};

export default Title;
