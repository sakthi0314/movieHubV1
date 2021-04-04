import React, { useEffect, useState } from "react";
import axios from "../../Services/axios";
import { APP_KEY, request } from "../../Services/request";
import { FaPlay } from "react-icons/fa";
import "./NetflixSlider.scss";

function NetflixSlider({ id, backdrop_path, title }) {
  const [trailer, setTrailer] = useState(null);

  // Fetch Trailer
  const fetchTrailer = async () => {
    const { data } = await axios.get(
      `/tv/${id}/videos?api_key=${APP_KEY}&language=en-US`
    );
    setTrailer(data.results[0]?.key);
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${trailer}`}
      target='_blank'
      className='netflixSlider'
    >
      <div className='netflixSlider__img'>
        <img src={`${request.IMG_URL}${backdrop_path}`} alt={title} />
        <h4 className='netflixSlider__title'>{title}</h4>
        <div className='netflixSlider__icon'>
          <FaPlay />
        </div>
      </div>
    </a>
  );
}

export default NetflixSlider;
