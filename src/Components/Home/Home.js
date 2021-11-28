/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CarruselHome from "./components/CarruselHome";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import UserForm from "../Users/UsersForm";
import Card from "../Card";
import Spinner from "../Spinner";

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
  
  console.log(state);
  return (
    <div className="d-flex flex-column align-items-center">
      {/* <Header /> */}
      <CarruselHome />
      <h1 className="m-5">Bienvenidos</h1>
      <div className="d-flex flex-column align-items-center m-3">
        <h3>Actividades</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {
            state ? 
              state.map(news => <Card img={news.image} title={news.name} description={news.description} />)
              :
              <Spinner />
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
