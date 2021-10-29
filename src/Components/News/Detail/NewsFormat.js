import './NewsFormat.css';
const NewsFormat = ({content}) => {
    console.log(content)
    const {title, image} = content;
    return ( 
        <>
        <div className="w-50  customize-card mx-3 ">
        <img className="customize-image-border card-img-top" src={image} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/error image somos mas.jpg";
          }}
        
        
        alt="no image" />
        <h1 className="h3 pl-4 pt-2 w-100 cursor-default card-title">{title}</h1>
        <h3 className="bottom-text"> Leer mas </h3>
        
        </div>
        
        </>
     );
}
 
export default NewsFormat;