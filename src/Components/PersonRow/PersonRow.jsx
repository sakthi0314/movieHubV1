import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import "./PersonRow.scss";

function PersonRow({ name, profile_path }) {
  return (
    <a
      href={`https://en.wikipedia.org/wiki/${name}`}
      target='_blank'
      className='personRow'
    >
      <img
        src={
          profile_path ? `${request.IMG_URL}${profile_path}` : request.NO_IMG
        }
        alt={name}
      />
      <h1>{name}</h1>
    </a>
  );
}

export default PersonRow;
