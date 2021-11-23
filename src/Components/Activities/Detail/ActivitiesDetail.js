import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ActivitiesDetail.css";
import { activitiesService } from "../../../Services/privateApiService";
import ActivitiesDetailContent from "./ActivitiesDetailContent";
import SpinnerCharge from "../../../Assets/SpinnerComponent/SpinnerCharge";
import { errorAlert } from "../../../Assets/Alerts/alerts";
import axios from "axios";

const ActivitiesDetail = () => {
  let { id: paramsId } = useParams();
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState({
    id: null,
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const getData = async () => {
      try{
        setLoading(true);
        const data = await axios.get(`http://ongapi.alkemy.org/public/api/activities/${paramsId}`);
        console.log(data.data.data);
        setActivity(data.data.data);
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
              <h1 className=" h1 w-100 text-center Activities-title">{activity.name}</h1>
              {/* Anterior contenido sin mi componente  <h1 className="h3 Activities-body text-justify">{paramsActivity[0].body}</h1> */}
              <ActivitiesDetailContent 
                body={activity.description}
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
