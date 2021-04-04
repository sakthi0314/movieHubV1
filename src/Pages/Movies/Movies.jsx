import React, { useEffect, useState } from "react";
import useGenre from "../../Components/CustomHooks/useGenre";
import Genres from "../../Components/Genres/Genres";
import MoviesRow from "../../Components/MoviesRow/MoviesRow";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import "./Movies.scss";

function Movies() {
  const [content, setcontent] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [selectedGenres, setselectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  // FetchMovies
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `/discover/movie?api_key=${APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreforURL}`
    );
    setcontent(data.results);
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
    fetchMovies();
  }, [currentPage, genreforURL]);
  return (
    <div className='movies'>
      <div className='movies__container'>
        <div className='movies__header'>
          <h1 className='movies__header--title'>Movies</h1>
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
            <MoviesRow
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              vote_average={item.vote_average}
              media_type='Movies'
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

export default Movies;
