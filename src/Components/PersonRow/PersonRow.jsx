import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import "./PersonRow.scss";

function PersonRow({ id, name, known_for_department, profile_path }) {
  return (
    <Link to={`/persons/${id}`} className='personRow'>
      <img
        src={
          profile_path ? `${request.IMG_URL}${profile_path}` : request.NO_IMG
        }
        alt={name}
      />
      <h1>{name}</h1>
    </Link>
  );
}

export default PersonRow;
