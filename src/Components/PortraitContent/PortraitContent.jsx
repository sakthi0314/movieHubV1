import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import "./PortraitContent.scss";

function PortraitContent({ id, title, poster, vote_average }) {
  return (
    <>
      <Link to={`/${id}`} className='portraitContent'>
        <img
          src={poster ? `${request.IMG_URL}/${poster}` : request.NO_IMG}
          alt={title}
          className='portraitContent__img'
        />
        <div className='portraitContent__info'>
          <h4 className='portraitContent__title'>{title}</h4>
          <span
            className={`portraitContent__rating ${vote_average < 6.5 && "red"}`}
          >
            {vote_average}
          </span>
        </div>
      </Link>
    </>
  );
}

export default PortraitContent;
