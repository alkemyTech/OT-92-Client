import "./NewsFormat.css";
const NewsFormat = ({ content }) => {
  const { name, image } = content;
  return (
    <>
      <div className="customize-card col-11 col-sm-5 col-lg-3 my-3 card-display d-block mx-4 mb-3 ">
        <img
          className="customize-image-border card-image-top  w-100"
          src={image || "nourl"}
          onError={event => {
          event.target.src = "/error image somos mas.jpg";
          event.onerror = null;}}
          loading="lazy"
        />
        <h1 className="h3 pl-4 pt-2 w-100 cursor-default card-title pr-2">
          {name}
        </h1>
        <h3 className="bottom-text"> Leer mas </h3>
      </div>
    </>
  );
};

export default NewsFormat;
