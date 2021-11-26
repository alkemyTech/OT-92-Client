import React, { useEffect, useState } from 'react'
import BaseReactPlayer from 'react-player/youtube'

const NewsLastVideo = () => {

    const [reproductorVideo, setReproductorVideo] = useState(true)

    useEffect(() => {
        
        return () => {
            setReproductorVideo(false)
        }
    }, [])

    return (
        <div className="video-Novedades" style={{ margin: "auto" }}>
            <section>
                <h2>Ultimo Evento:</h2>
                <h3>Asistencia a comedores comunitarios en B.A</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet reprehenderit ipsum beatae similique culpa porro consectetur.
                    Repudiandae, sapiente dignissimos nesciunt laudantium necessitatibus in
                    sint saepe inventore impedit, dolores, esse aliquid!
                </p>
            </section>
            <BaseReactPlayer
                controls={true}
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
                style={{ boxShadow: "-13px 13px 7px 1px rgb(0 0 0 / 20%)" }}
                width={"750px"}
                height={"422px"}
                url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
            />
        </div>
    )
}

export default NewsLastVideo
