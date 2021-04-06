import React, { useEffect, useState } from "react";
import PortraitContent from "../../../Components/PortraitContent/PortraitContent";
import axios from "../../../Services/axios";
import { request } from "../../../Services/request";
import "./Upcoming.scss";

function UpcomingMovies() {
  const [content, setContent] = useState([]);

  // Fetch Upcoming movies
  const fetchUpcoming = async () => {
    const response = await axios.get(request.fetchUpcoming);
    setContent(response.data.results);
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <section className='upcoming'>
      <div className='upcoming__container'>
        <div className='upcoming__header'>
          <h1>Upcoming Movies</h1>
        </div>
        <div className='upcoming__content'>
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
    </section>
  );
}

export default UpcomingMovies;
