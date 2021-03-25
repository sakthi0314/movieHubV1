import React, { useEffect, useState } from "react";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import "./Banner.scss";

function Banner() {
  const [banner, setBanner] = useState({});
  // Fetch Banner
  const fetchBanner = async () => {
    try {
      const response = await axios.get(request.fetchTrening);
      const data = await response.data;
      setBanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    } catch (error) {
      window.location.href = `https://stackoverflow.com/search?q=[js]${error.message}`;
    }
  };

  useEffect(async () => {
    setTimeout(() => {
      fetchBanner();
    }, 2000);
  }, []);
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `linear-gradient(to top,rgba(0, 0, 0, .9), rgba(0, 0, 0, .4)),URL("${request.IMG_URL}${banner?.backdrop_path}")`,
      }}
    >
      <div className='container'>
        <div className='banner__content'>
          <div className='banner__title'>
            <h1 className='banner__title'>Welcome.</h1>
            <h4 className='banner__sub'>
              Millions of movies, TV shows and people to discover. Explore now.
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
