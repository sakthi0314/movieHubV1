import React, { useEffect, useState } from "react";
import RowContent from "../../Components/RowContent/RowContent";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import "./Trendings.scss";

function Trendings() {
  const [trending, setTreding] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [media_type, setMedia_type] = useState("all");
  const [time, setTime] = useState("day");

  // Fetch Trending
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `/trending/${media_type}/${time}?api_key=${APP_KEY}&language=en-US&page=${currentPage}`
    );
    setTreding(data.results);
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    window.scroll(0, 0);
  };

  const handlePre = () => {
    setcurrentPage(currentPage - 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchTrending();
  }, [time, media_type, currentPage]);

  return (
    <div className='trending'>
      <div className='trending__container'>
        <div className='trending__header'>
          <h1 className='trending__header--title'>Trending Now</h1>
          <div className='trending__header--sort'>
            <h4>Sort by</h4>
            <select
              name='typeOne'
              className='typeShows__select trending__header--selecone'
              onChange={(e) => {
                let selectedType = e.target.value;
                setMedia_type(selectedType);
              }}
            >
              <option value='all'>All</option>
              <option value='movie'>Movie</option>
              <option value='tv'>Tv</option>
            </select>

            <select
              className='typeShows__select trending__header--selecttwo'
              name='typetwo'
              onChange={(e) => {
                let selectedType = e.target.value;
                setTime(selectedType);
              }}
            >
              <option value='day'>Today</option>
              <option value='week'>Week</option>
            </select>
          </div>
        </div>
        <div className='trending__content'>
          {trending.map((item) => (
            <RowContent
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              vote_average={item.vote_average}
              media_type={item.media_type}
              overview={item.overview}
            />
          ))}
        </div>
        <div className='trending__pagination'>
          {currentPage >= 2 && (
            <button
              className='trending__pagination--one primary'
              onClick={handlePre}
            >
              Pre
            </button>
          )}
          <button
            className='trending__pagination-two primary'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trendings;
