/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import "./CarruselHome.css";
import "../../../LazyLoadImages/LazyLoad.css";
import { getHomeData } from "../../../../Services/publicApiService";
const LazyLoad = lazy(() => import("../../../LazyLoadImages/LazyLoad.js"));

let contador = 0;
let interval;
let timeOut;


const CarruselHome = () => {
  let urlSlides = "http://ongapi.alkemy.org/public/api/slides";
  const [descripcion, setDescripcion] = useState();
  const [imgActual, setimgActual] = useState();
  const [imagenes, setImagenes] = useState();
  const [titulo, setTitulo] = useState();
  const imgRefCarrusel = useRef(); //referencia de la imagen del carrusel
  const datosRef = useRef(); //referencia del texto de info
  const arrDeImg = [];

  const prevBtn = () => { // tiene 2 if, dependiendo de en que lugar se encuentre la img hace una u otra cosa
    clearInterval(interval);
    if (contador === 0) { //mientras sea la ultima imagen este if se ejecutará

      contador = imagenes[0].length - 1; //actualiza el contador
      if (imagenes[0][contador].description != null) {
        let datosSinParsear = imagenes[0][contador].description, //Obtiene la descripcion original
          datosParseados = datosSinParsear.replace(/(<([^>]+)>)/g, ""); //Convierte la descripcion De HTMl a String
        setDescripcion(datosParseados);
      }

      imgRefCarrusel.current.className = "img-Home-Actual animacionImg";
      timeOut = setTimeout(() => {
        imgRefCarrusel.current.className = "img-Home-Actual";
        setimgActual(imagenes[0][contador].image);
        setTitulo(imagenes[0][contador].name);
      }, 500);
      return intervalFunction(imagenes);
    }

    if (contador > 0 && contador <= imagenes[0].length - 1) { //sino este if se ejecutará

      contador--;
      if (imagenes[0][contador].description != null) {
        let datosSinParsear = imagenes[0][contador].description, //Obtiene la descripcion original
          datosParseados = datosSinParsear.replace(/(<([^>]+)>)/g, ""); //Convierte la descripcion De HTMl a String
        setDescripcion(datosParseados);
      }

      imgRefCarrusel.current.className = "img-Home-Actual animacionImg";
      timeOut = setTimeout(() => {
        imgRefCarrusel.current.className = "img-Home-Actual";
        setimgActual(imagenes[0][contador].image);
        setTitulo(imagenes[0][contador].name);
      }, 500);
      return intervalFunction(imagenes);
    }
  };

  const nextBtn = () => { // tiene 2 if, dependiendo de en que lugar se encuentre la img hace una u otra cosa

    clearInterval(interval);
    if (contador < imagenes[0].length - 1) {//mientras sea la ultima imagen este if se ejecutará

      contador++;

      if (imagenes[0][contador].description != null) {
        let datosSinParsear = imagenes[0][contador].description, //Obtiene la descripcion original
          datosParseados = datosSinParsear.replace(/(<([^>]+)>)/g, ""); //Convierte la descripcion De HTMl a String
        setDescripcion(datosParseados);
      }

      imgRefCarrusel.current.className = "img-Home-Actual animacionImg";
      timeOut = setTimeout(() => {
        imgRefCarrusel.current.className = "img-Home-Actual";
        setimgActual(imagenes[0][contador].image);
        setTitulo(imagenes[0][contador].name);
      }, 500);
      return intervalFunction(imagenes);
    }

    if (contador === imagenes[0].length - 1) {//sino este if se ejecutará

      contador = 0;

      if (imagenes[0][contador].description != null) {
        let datosSinParsear = imagenes[0][contador].description, //Obtiene la descripcion original
          datosParseados = datosSinParsear.replace(/(<([^>]+)>)/g, ""); //Convierte la descripcion De HTMl a String
        setDescripcion(datosParseados);
      }

      imgRefCarrusel.current.className = "img-Home-Actual animacionImg";
      timeOut = setTimeout(() => {
        imgRefCarrusel.current.className = "img-Home-Actual";
        setimgActual(imagenes[0][contador].image);
        setTitulo(imagenes[0][contador].name);
      }, 500);
      return intervalFunction(imagenes);
    }
  };

  const intervalFunction = (prop) => {//interval inicial y base, prevBtn y nextBtn ejecutan esta función
    interval = setInterval(() => {

      if (prop[0][contador].description != null) {
        let datosSinParsear = prop[0][contador].description, //Obtiene la descripcion original
          datosParseados = datosSinParsear.replace(/(<([^>]+)>)/g, ""); //Convierte la descripcion De HTMl a String
        setDescripcion(datosParseados);
      }


      if (contador >= prop[0].length - 1) {

        contador++;

        contador = 0;
        imgRefCarrusel.current.className = "img-Home-Actual animacionImg"; //cambia la opacidad de 1 a 0
        return timeOut = setTimeout(() => {
          imgRefCarrusel.current.className = "img-Home-Actual"; //cambia la opacidad de 0 a 1
          setimgActual(prop[0][contador].image);
          setTitulo(prop[0][contador].name);
        }, 500);
      }
      if (contador < prop[0].length - 1) {

        contador++;

        imgRefCarrusel.current.className = "img-Home-Actual animacionImg"; //cambia la opacidad de 1 a 0
        return timeOut = setTimeout(() => {
          imgRefCarrusel.current.className = "img-Home-Actual"; //cambia la opacidad de 0 a 1
          setimgActual(prop[0][contador].image);
          setTitulo(prop[0][contador].name);
        }, 500);
      }
    }, 5000);
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      const dataImg = await getHomeData(urlSlides),
        resDataImg = await dataImg.data.data;
    
      if (resDataImg) {
    
        arrDeImg.push(resDataImg);
        setImagenes(arrDeImg);
        setimgActual(arrDeImg[0][contador].image);
        setTitulo(arrDeImg[0][contador].name);
        setDescripcion(arrDeImg[0][contador].description);
    
        if (arrDeImg[0][contador].description != null) {
          let datosSinParsear = arrDeImg[0][contador].description, //Obtiene la descripcion original
            datosParseados = datosSinParsear.replace(/(<([^>]+)>)/g, ""); //Convierte la descripcion De HTMl a String
          setDescripcion(datosParseados);
        }
    
        intervalFunction(arrDeImg);
      }
    };
    obtenerDatos();
    return () => {
      clearInterval(interval);
    };
  }, [urlSlides]);

  return (
    <div className="container-carrusel">
      {/* {
                imagenes
                    ?  */}
      <div className="contenedor-Img-Carrusel-Home">
        <section className='img-Home-Actual' ref={imgRefCarrusel}>
          {/* <img src={imgActual} width='100%' height="450px" alt={titulo} /> */}
                           
          <Suspense fallback={<div class="lds-dual-ring w-100 d-flex justify-content-center"></div>}>
            <LazyLoad image={imgActual}/>
          </Suspense>
        </section>
        <section
          className="datos-Title-Descripcion-Carrusel-Home"
          ref={datosRef}
          onMouseLeave={() => datosRef.current.className = "datos-Title-Descripcion-Carrusel-Home"}
          onMouseEnter={(() => datosRef.current.className = "datos-Title-Descripcion-Carrusel-Home active")}>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </section>
        <button className='btn-Home-Carrusel-Prev' onClick={prevBtn}>
          <p>{"<"}</p>
        </button>
        <button className='btn-Home-Carrusel-Next' onClick={nextBtn}>
          <p>{">"}</p>
        </button>
      </div>
      {/* : <h1>cargando</h1>
            } */}
    </div>
  );
};

export default CarruselHome;
