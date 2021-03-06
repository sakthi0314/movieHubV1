import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";

function MoviesRow({ title, id, overview, poster, media_type }) {
  function trancat(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Link
      to={`movies/${id}`}
      style={{ textDecoration: "none", outline: "none", border: "none" }}
    >
      <div className='rowContent'>
        <div className='rowContent__container'>
          <div className='rowContent__img'>
            <img
              src={poster ? `${request.IMG_URL}${poster}` : request.NO_IMG}
              alt={title}
              className='rowContent__img--poster'
            />
          </div>
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
    </Link>
  );
}

export default MoviesRow;
