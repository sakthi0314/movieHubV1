import React from "react";
import { request } from "../../Services/request";
import "./CastSlider.scss";

function CastSlider({ profile_path, name, character }) {
  return (
    <>
      <div className='CastSlider'>
        <img src={`${request.IMG_URL}${profile_path}`} alt={name} />
        <h4>{Name}</h4>
        <p>{character}</p>
      </div>
    </>
  );
}

export default CastSlider;
