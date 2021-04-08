import React, { useEffect, useState } from "react";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import ShowContent from "../../../Components/ShowsContent/ShowsContent";
import "./TypeShows.scss";

function TypeShows() {
  const [content, setContent] = useState([]);
  const [type, setType] = useState("popular");

  // Fetch Data
  const fetchData = async () => {
    const { data } = await axios.get(`tv/${type}/${request.fetchtype}`);
    setContent([...data.results]);
  };

  useEffect(async () => {
    await fetchData();
    return () => setContent({});
  }, [type]);

  return (
    <div className='typeShows'>
      <div className='typeShows__container'>
        <div className='typeShows__header'>
          <h1>{type} Tv Series</h1>
          <select
            className='typeShows__select'
            name='type'
            onChange={(e) => {
              const selected = e.target.value;
              setType(selected);
            }}
          >
            <option className='typeShows__option' value='popular'>
              Popular
            </option>
            <option className='typeShows__option' value='top_rated'>
              Top rated
            </option>

            <option className='typeShows__option' value='airing_today'>
              Today
            </option>

            <option className='typeShows__option' value='on_the_air'>
              On Air
            </option>
          </select>
          <span className='typeShows__icon'></span>
        </div>
        <div className='typeShows__content'>
          {content &&
            content.map((item) => (
              <ShowContent
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

export default TypeShows;
