import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ActivitiesDetail.css";
import { activitiesService } from "../../../Services/privateApiService";
import ActivitiesDetailContent from "./ActivitiesDetailContent";
import SpinnerCharge from "../../../Assets/SpinnerComponent/SpinnerCharge";
import { errorAlert } from "../../../Assets/Alerts/alerts";

const ActivitiesDetail = () => {
  let { id: paramsId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try{
        setLoading(true);
        //Servicio reutilizable para traer el item by ID con await
        setLoading(false);
      }
      catch{
        errorAlert({title:"Error", text:"No se obtuvieron datos."});
      }
    };

    getData();
    
  }, [paramsId]);

  return (
    <>
      <div>
        {loading ? <SpinnerCharge /> :
          (
            <div className="container d-flex flex-column justify-items-center mt-5">
              <h1 className=" h1 w-100 text-center Activities-title">{paramsActivity[0].title}</h1>
              {/* Anterior contenido sin mi componente  <h1 className="h3 Activities-body text-justify">{paramsActivity[0].body}</h1> */}
              <ActivitiesDetailContent 
                body={paramsActivity[0].body}
                paramsId={paramsId}
              />
            </div>
          )
        }
      </div>
    </>
  );
};

export default ActivitiesDetail;
