import React, { useEffect, useState } from "react";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import "./TypeMovie.scss";
import PortraitContent from "../../../Components/PortraitContent/PortraitContent";

function TypeMovie() {
  const [content, setContent] = useState([]);
  const [type, setType] = useState("now_playing");

  // Fetch data
  const fetchData = async () => {
    const { data } = await axios.get(`movie/${type}/${request.fetchtype}`);
    setContent(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className='typemovie'>
      <div className='typemovie__container'>
        <div className='typemovie__header'>
          <h1>{type} Movie</h1>
          <select
            className='typemovie__select'
            name='type'
            onChange={(e) => {
              const selected = e.target.value;
              setType(selected);
            }}
          >
            <option className='typemovie__option' value='popular'>
              Popular
            </option>
            <option className='typemovie__option' value='top_rated'>
              Top rated
            </option>

            <option className='typemovie__option' value='now_playing'>
              Now Playing
            </option>
          </select>
          <span className='typemovie__icon'></span>
        </div>
        <div className='typemovie__content'>
          {content &&
            content.map((item) => (
              <PortraitContent
                key={item?.id}
                id={item?.id}
                title={item?.title || item?.name}
                poster={item?.poster_path}
                vote_average={item?.vote_average}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TypeMovie;
