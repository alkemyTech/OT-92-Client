import React, { useEffect } from "react";
import CarruselHome from "./components/CarruselHome";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      
      <CarruselHome />
    

      <h1 className="m-5">Texto de bienvenida</h1>

      <div className="d-flex flex-column align-items-center m-3">
        <h3>Últimas novedades</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {/* The upcoming div element are just placeholders */}
          <div
            className="card d-flex m-3 align-items-center justify-content-center"
            style={{ width: "13rem", height: "15rem" }}
          >
            <h5>Card</h5>
          </div>
          <div
            className="card d-flex m-3 align-items-center justify-content-center"
            style={{ width: "13rem", height: "15rem" }}
          >
            <h5>Card</h5>
          </div>
          <div
            className="card d-flex m-3 align-items-center justify-content-center"
            style={{ width: "13rem", height: "15rem" }}
          >
            <h5>Card</h5>
          </div>
          <div
            className="card d-flex m-3 align-items-center justify-content-center"
            style={{ width: "13rem", height: "15rem" }}
          >
            <h5>Card</h5>
          </div>
          <div
            className="card d-flex m-3 align-items-center justify-content-center"
            style={{ width: "13rem", height: "15rem" }}
          >
            <h5>Card</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
