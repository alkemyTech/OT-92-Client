import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMembers } from "../../store/members/membersSlice";
import axios from "axios";
import Card from "../Card";

export default function MembersList() {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.members);
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);
  console.log(members);
  const membersMocked = [
    {
      "id": 258,
      "name": "Osvaldo Olivera",
      "image": "http://ongapi.alkemy.org/storage/kw2hNujhuq.jpeg",
      "description": "Presidente",
      "facebookUrl": "https://www.facebook.com/100075440371054/",
      "linkedinUrl": "https://www.linkedin.com/in/osvaldo-olivera-785b78226/",
      "created_at": "2021-11-09T20:22:05.000000Z",
      "updated_at": "2021-11-23T04:34:29.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 259,
      "name": "Nahuel Narváez",
      "image": "http://ongapi.alkemy.org/storage/z5x07SOhzl.jpeg",
      "description": "Secretario",
      "facebookUrl": "https://www.facebook.com/100075448260572/",
      "linkedinUrl": "https://www.linkedin.com/in/nahuel-narváez-099b89226/",
      "created_at": "2021-11-09T23:25:38.000000Z",
      "updated_at": "2021-11-23T04:18:18.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 261,
      "name": "Griselda Germán",
      "image": "http://ongapi.alkemy.org/storage/dR97wbZyUN.jpeg",
      "description": "Tesorera",
      "facebookUrl": "https://www.facebook.com/100074894726439/",
      "linkedinUrl": "https://www.linkedin.com/in/griselda-germán-137b83226/",
      "created_at": "2021-11-10T00:32:23.000000Z",
      "updated_at": "2021-11-23T04:31:58.000000Z",
      "deleted_at": null,
      "group_id": null
    }
  ];

  return (
    <>
      <h2>Miembros</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        {membersMocked &&
        membersMocked.map((member, i) => {
          return (
            <a href={member.linkedinUrl} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>

              <Card key={i} img={member.image} title={member.name} description={member.description}/>
            </a>
          );
        })}
      </div>
    </>
  );
}



