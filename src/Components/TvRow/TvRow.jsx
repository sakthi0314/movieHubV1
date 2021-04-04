import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";

function TvRow({ title, id, overview, poster, media_type }) {
  function trancat(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div>
      <div className='rowContent'>
        <div className='rowContent__container'>
          <Link to={`series/${id}`} className='rowContent__img'>
            <img
              src={poster ? `${request.IMG_URL}${poster}` : request.NO_IMG}
              alt={title}
              className='rowContent__img--poster'
            />
          </Link>
          <div className='rowContent__info'>
            <h1 className='rowContent__info--title'>{title}</h1>
            <p className='rowContent__info--overview'>
              {trancat(overview, 180)}
            </p>
            <p className='rowContent__info--media'>
              Media type :
              <span className='rowContent__info--type'> {media_type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvRow;
