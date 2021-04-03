import React, { useEffect, useState } from "react";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import NetflixLogo from "../../../Assets/netflix.svg";
import "./NetlfixOriginals.scss";
import NetflixSlider from "../../../Components/NetflixSlider/NetflixSlider";

function NetlfixOriginals() {
  const [backdrop, setbackdrop] = useState({});
  const [content, setContent] = useState([]);

  // Fetch Netflix
  const fetchBackdrop = async () => {
    const { data } = await axios.get(request.fetchNetflixOrignals);
    setbackdrop(
      data.results[Math.floor(Math.random() * data.results.length - 1)]
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchBackdrop();
  }, []);

  return (
    <>
      <div
        className='netflix'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, .9)),URL("${request.IMG_URL}${backdrop?.backdrop_path}")`,
        }}
      >
        <div className='netflix__container'>
          <div className='netflix__header'>
            <div className='netflix__logo'>
              <img src={NetflixLogo} alt='Netflix logo' />
            </div>
          </div>

          <div className='netflix__content'>
            {content &&
              content.map((item) => (
                <NetflixSlider
                  key={item?.id}
                  id={item?.id}
                  title={item?.title || item?.name}
                  backdrop_path={item?.backdrop_path}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NetlfixOriginals;
