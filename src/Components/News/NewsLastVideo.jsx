import React, { useEffect, useState } from "react";
import BaseReactPlayer from "react-player/youtube";

const NewsLastVideo = () => {

  const [reproductorVideo, setReproductorVideo] = useState(true);

  useEffect(() => {
        
    return () => {
      setReproductorVideo(false);
    };
  }, []);

  return (
    <div className="video-Novedades mt-3" style={{ margin: "auto", backgroundColor:"#587fa9", height:"400px", marginBottom:"5%" }}>
      <section className="p-5">
        <h2>Ultimo Evento:</h2>
        <h3>Asistencia a comedores comunitarios en B.A</h3>
        <p>
          En el marco de un proyecto financiado por la Unión Europea en Argentina e implementado por OIM Argentina y el ACNUR, donamos 42 toneladas de alimentos para comedores comunitarios en el partido de San Martín, Buenos Aires.
        </p>
      </section>
      <div className="p-3">
        <BaseReactPlayer
          controls={true}
          muted
          config={{
            youtube: { // Specifies the type of video that is rendered
              playerVars: { // Custom settings. See more in https://developers.google.com/youtube/player_parameters?playerVersion=HTML5
                showinfo: 0,
                color: "white",
                fs: 0,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
          playing={reproductorVideo}
          style={{ boxShadow: "-13px 13px 7px 1px rgb(0 0 0 / 20%)", marginTop:"2%" }}
          width={"700px"}
          height={"350px"}
          url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
        />
      </div>
    </div>
  );
};

export default NewsLastVideo;
