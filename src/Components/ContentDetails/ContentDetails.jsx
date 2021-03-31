import React, { useEffect, useState } from "react";
import axios from "../../Services/axios";
import { useParams } from "react-router-dom";
import { APP_KEY, request } from "../../Services/request";
import "./ContentDetails.scss";
import CastSlider from "../CastSlider/CastSlider";
import { FaPlay } from "react-icons/fa";

function ContentDetails() {
  const [detail, setDetail] = useState({});
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  // Fetch Detail
  const fetchDetail = async () => {
    const response = await axios.get(
      `/movie/${id}?api_key=${APP_KEY}&language=en-US`
    );
    const data = await response.data;
    setDetail(data);
  };

  // Fetch Casts
  const fetchCasts = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APP_KEY}&language=en-US`
    );
    setCasts(data.cast);
  };

  useEffect(() => {
    fetchDetail();
    fetchCasts();
  }, []);

  return (
    <>
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
                src={
                  `${request.IMG_URL}${detail?.poster_path}` || request.NO_IMG
                }
                alt={detail?.title || detail.name}
              />
            </div>
            <div className='contentDetails__scroll'></div>
          </div>
        </div>
      </header>

      <div className='contentDetails__info'>
        <h1 className='contentDetails__title'>
          {detail?.title || detail?.name}
        </h1>
        <div className='contentDetails__center'>
          <div
            className={`contentDetails__center--rating ${
              detail?.vote_average < 6.5 && "redOne"
            }`}
          >
            <span className={`${detail?.vote_average < 6.5 && "red"}`}>
              {detail?.vote_average}
            </span>
          </div>

          <a href='#' className='contentDetails__center--trailer'>
            <span>
              <FaPlay />
            </span>
            Play Trailer
          </a>
        </div>
        <div className='contentDetails__description'>
          <i className='contentDetails__description--tagline'>
            {detail?.tagline}
          </i>
          <span className='contentDetails__description--overview'>
            {detail?.overview}
          </span>
        </div>
      </div>

      <div className='contentDetails__cast'>
        <h1 className='contentDetails__cast--title'>Cast and crew</h1>
        <div className='contentDetails__cast--content'>
          {casts.map((cast) => (
            <CastSlider
              key={cast?.id}
              id={cast?.id}
              name={cast?.original_name || cast?.name}
              character={cast?.character}
              profile_path={cast?.profile_path}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ContentDetails;
