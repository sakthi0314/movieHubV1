import React, { useEffect, useState } from "react";
import axios from "../../Services/axios";
import useGenre from "../../Components/CustomHooks/useGenre";
import Genres from "../../Components/Genres/Genres";
import "./Series.scss";
import { APP_KEY } from "../../Services/request";
import TvRow from "../../Components/TvRow/TvRow";

function Series() {
  const [content, setcontent] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [selectedGenres, setselectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  // Fetch tv
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `/discover/tv?api_key=${APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreforURL}`
    );
    setcontent(data.results);
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, genreforURL]);

  const handlePre = () => {
    setcurrentPage(currentPage - 1);
    window.scroll(0, 0);
  };

  return (
    <div className='movies'>
      <div className='movies__container'>
        <div className='movies__header'>
          <h1 className='movies__header--title'>Tv Shows</h1>
          <Genres
            type='movie'
            selectedGenres={selectedGenres}
            setselectedGenres={setselectedGenres}
            genres={genres}
            setgenres={setGenres}
            setcurrentPage={setcurrentPage}
          />
        </div>
        <div className='movies__content'>
          {content.map((item) => (
            <TvRow
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              vote_average={item.vote_average}
              media_type='Tv'
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

export default Series;
