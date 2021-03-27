import React, { useEffect, useState } from "react";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import "./Banner.scss";

function Banner() {
  const [banner, setBanner] = useState({});

  // Fetch Banner
  const fetchBanner = async () => {
    const response = await axios.get(request.fetchTrening);
    const data = await response.data;
    setBanner(
      data.results[Math.floor(Math.random() * data.results.length - 1)]
    );
  };

  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <>
      <header
        className='banner'
        style={{
          backgroundImage: `URL("${request.IMG_URL}${banner?.backdrop_path}")`,
        }}
      >
        <div className='banner__overlay'></div>
      </header>
    </>
  );
}

export default Banner;
