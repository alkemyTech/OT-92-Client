/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CarruselHome from "./components/CarruselHome";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import UserForm from "../Users/UsersForm";

const Home = () => {

  const [state, setstate] = useState();

  useEffect(() => {
    const dataCards = async () => {
      const data = await axios.get("http://ongapi.alkemy.org/api/activities"),
        dataSuccess = await data.data.data;
      setstate(dataSuccess);
    };
    dataCards();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      <CarruselHome />
      <h1 className="m-5">Bienvenidos</h1>
      <div className="d-flex flex-column align-items-center m-3">
        <h3>Últimas novedades</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {
            state
              ? <section className="d-flex">
                <div
                  className="div-Home-News card d-flex m-3 align-items-center justify-content-center"
                  style={{ width: "13rem", height: "15rem" }}
                >
                  <section className="info-News-Home">
                    <p className="info-Novedades-Home">{state[0].name}</p>
                  </section>
                  <img src={state[0].image} style={{ borderRadius: "10px" }} alt="img" width="210px" height="240px" />
                </div>
                <div
                  className="div-Home-News card d-flex m-3 align-items-center justify-content-center"
                  style={{ width: "13rem", height: "15rem" }}
                >
                  <section className="info-News-Home">
                    <p className="info-Novedades-Home">{state[1].name}</p>
                  </section>
                  <img src={state[1].image} style={{ borderRadius: "10px" }} alt="img" width="210px" height="240px" />
                </div>
                <div
                  className="div-Home-News card d-flex m-3 align-items-center justify-content-center"
                  style={{ width: "13rem", height: "15rem" }}
                >
                  <section className="info-News-Home">
                    <p className="info-Novedades-Home">{state[2].name}</p>
                  </section>
                  <img src={state[2].image} style={{ borderRadius: "10px" }} alt="img" width="210px" height="240px" />
                </div>
                <div
                  className="div-Home-News card d-flex m-3 align-items-center justify-content-center"
                  style={{ width: "13rem", height: "15rem" }}
                >
                  <section className="info-News-Home">
                    <p className="info-Novedades-Home">{state[3].name}</p>
                  </section>
                  <img src={state[3].image} style={{ borderRadius: "10px" }} alt="img" width="210px" height="240px" />
                </div>
                <div
                  className="div-Home-News card d-flex m-3 align-items-center justify-content-center"
                  style={{ width: "13rem", height: "15rem" }}
                >
                  <section className="info-News-Home">
                    <p className="info-Novedades-Home">{state[4].name}</p>
                  </section>
                  <img src={state[4].image} style={{ borderRadius: "10px" }} alt="img" width="210px" height="240px" />
                </div>
              </section>
              : <p>Cargando</p>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
