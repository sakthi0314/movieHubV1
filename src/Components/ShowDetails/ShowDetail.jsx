import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APP_KEY, request } from "../../Services/request";
import CastSlider from "../CastSlider/CastSlider";
import axios from "../../Services/axios";
import { FaPlay } from "react-icons/fa";

function ShowDetail() {
  const { tv } = useParams();
  const [detail, setDetail] = useState({});
  const [casts, setCasts] = useState([]);
  const [trailer, setTrailer] = useState(null);

  // Fetch Details
  const fetchDetail = async () => {
    const response = await axios.get(
      `/tv/${tv}?api_key=${APP_KEY}&language=en-US`
    );
    const data = await response.data;
    setDetail(data);
  };

  // Fetch Casts
  const fetchCasts = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${tv}/credits?api_key=${APP_KEY}&language=en-US`
    );
    setCasts(data.cast);
  };

  // Fetch Trailer
  const fetchTrailer = async () => {
    const { data } = await axios.get(
      `/tv/${tv}/videos?api_key=${APP_KEY}&language=en-US`
    );
    setTrailer(data.results[0]?.key);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchDetail();
    fetchCasts();
    fetchTrailer();
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

          <a
            href={`https://www.youtube.com/watch?v=${trailer}`}
            className='contentDetails__center--trailer'
          >
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
          <p className='contentDetails__description--date'>
            release Date: {detail?.release_date}
          </p>
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

export default ShowDetail;
