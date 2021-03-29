import React, { useEffect, useState } from "react";
import axios from "../../Services/axios";
import { APP_KEY, request } from "../../Services/request";
import "./ContentDetails.scss";
import { BsPlayFill } from "react-icons/bs";
import CastSlider from "../CastSlider/CastSlider";

function ContentDetails({ match }) {
  const [detail, setDetail] = useState({});

  // Fetch Detail
  const fetchDetail = async () => {
    const response = await axios.get(
      `/movie/${match.params.id}?api_key=${APP_KEY}&language=en-US`
    );
    const data = await response.data;
    setDetail(data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <header
      className='contentDetails'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.171),rgba(0, 0, 0, 1)),URL("${request.IMG_URL}${detail?.backdrop_path}")`,
      }}
    >
      <div className='contentDetails__container'>
        <div className='contentDetails__header'>
          <div className='contentDetails__img'>
            <img
              src={`${request.IMG_URL}${detail?.poster_path}` || request.NO_IMG}
              alt={detail?.title || detail.name}
            />
          </div>
          <div className='contentDetails__scroll'></div>
        </div>

        <div className='contentDetails__info'>
          <h1 className='contentDetails__info--title'>
            {detail?.title || detail?.name}
            <span className='contentDetails__info--date'>
              ({detail?.release_date})
            </span>
          </h1>
          <div className='contentDetails__info--trailer'>
            <div
              className={`contentDetails__info--rating ${
                detail?.vote_average < 6.5 && "redOne"
              }`}
            >
              <span className={detail?.vote_average < 6.5 && "red"}>
                {detail?.vote_average}
              </span>
            </div>
            <a href='#' className='trailerBtn'>
              <BsPlayFill />
              <span> Watch Trailer</span>
            </a>
          </div>
        </div>

        <div className='contentDetails__description'>
          <i className='contentDetails__description--tagline'>
            {detail?.tagline}
          </i>

          <p className='contentDetails__description--overview'>
            {detail?.overview}
          </p>
        </div>

        <div className='contentDetails__cast'>
          <div className='contentDetails__cast--header'>
            <h1>Cast</h1>
          </div>
          <div className='contentDetails__cast--persons'></div>
        </div>
      </div>
    </header>
  );
}

export default ContentDetails;
