import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import { FaPlay } from "react-icons/fa";
import "./NetflixSlider.scss";

function NetflixSlider({ id, backdrop_path, title }) {
  return (
    <a href='#' className='netflixSlider'>
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
