import React from "react";
import { request } from "../../Services/request";
import "./CastSlider.scss";

function CastSlider({ name, id, character, profile_path }) {
  return (
    <>
      <a
        href={`https://en.wikipedia.org/wiki/${name}`}
        target='_blank'
        className='castSlider'
      >
        <img
          src={
            profile_path ? `${request.IMG_URL}/${profile_path}` : request.NO_IMG
          }
          alt={name}
        />
        <h4 className='castSlider__name'>{name}</h4>
        <p className='castSlider__char'>{character}</p>
      </a>
    </>
  );
}

export default CastSlider;
