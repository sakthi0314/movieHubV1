import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import "./PortraitContent.scss";

function PortraitContent({ id, title, poster, vote_average }) {
  return (
    <>
      <Link to={`/${id}`} className='portraitContent'>
        <div
          className={`portraitContent__rating ${
            vote_average < 6.5 && "redOne"
          }`}
        >
          <span className={(vote_average < 6.5 && "red") || 8.4}>
            {vote_average}
          </span>
        </div>
        <img
          src={poster ? `${request.IMG_URL}/${poster}` : request.NO_IMG}
          alt={title}
          className='portraitContent__img'
        />
        <h4 className='portraitContent__title'>{title}</h4>
      </Link>
    </>
  );
}

export default PortraitContent;
