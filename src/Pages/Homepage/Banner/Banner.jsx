import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import "../../../Styles/button.scss";
import "./Banner.scss";

function Banner() {
  const [banner, setBanner] = useState({});

  // Fetch Banner
  const fetchBanner = async () => {
    const response = await axios.get(request.fetchTrending);
    const data = await response.data;
    setBanner(
      data.results[Math.floor(Math.random() * data.results.length - 1)]
    );
  };

  // Trancate Function
  function trancate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <>
      <header
        className='banner'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.171),rgba(0, 0, 0, 1)),URL("${request.IMG_URL}/${banner?.backdrop_path}")`,
        }}
      >
        <div className='banner__overlay'></div>
        <div className='banner__content'>
          <h1>{banner?.title || banner?.name}</h1>
          <p>{trancate(banner?.overview, 150)}</p>
          <button className='banner__btn primary'>
            <Link
              style={{ textDecoration: "none", color: "#111", outline: "none" }}
              to='/movies'
            >
              Explore Now
            </Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default Banner;
