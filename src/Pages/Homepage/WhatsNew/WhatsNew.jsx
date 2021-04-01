import React, { useEffect, useState } from "react";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import "./WhatsNew.scss";
import PortraitContent from "../../../Components/PortraitContent/PortraitContent";

function WhatsNew() {
  const [content, setContent] = useState([]);
  const [type, setType] = useState("now_playing");

  console.log(type);

  // Fetch Popular
  const fetchData = async () => {
    const { data } = await axios.get(`movie/${type}/${request.fetchPopular}`);
    setContent(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className='whatsNew'>
      <div className='whatsNew__container'>
        <div className='whatsNew__header'>
          <h1>What's New</h1>
          <select
            className='whatsNew__select'
            name='type'
            onChange={(e) => {
              const selected = e.target.value;
              setType(selected);
            }}
          >
            <option className='whatsNew__option' value='popular'>
              Popular
            </option>
            <option className='whatsNew__option' value='top_rated'>
              Top rated
            </option>

            <option className='whatsNew__option' value='now_playing'>
              Now Playing
            </option>
          </select>
          <span className='whatsNew__icon'></span>
        </div>
        <div className='whatsNew__content'>
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

export default WhatsNew;
