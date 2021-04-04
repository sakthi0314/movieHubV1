import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchRow from "../../Components/SearchRow/SearchRow";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import "./Search.scss";

function Search() {
  const [currentPage, setcurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [content, setContent] = useState([]);

  // Get Search
  const fetchSearch = async () => {
    const { data } = await axios.get(
      `/search/movie?api_key=${APP_KEY}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
    );
    setContent(data.results);
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    window.scroll(0, 0);
  };

  const handlePre = () => {
    setcurrentPage(currentPage - 1);
    window.scroll(0, 0);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    fetchSearch();
  }, [currentPage, query]);

  return (
    <div className='search'>
      <div className='search__container'>
        <h1>Search here for Movie & Tv shows</h1>
        <div className='search__header'>
          <form className='search__form' onSubmit={getSearch}>
            <input
              type='text'
              value={search}
              onChange={updateSearch}
              placeholder='Search for a movie and tv shows'
            />
            <button className='search__btn' type='submit'>
              <BsSearch />
            </button>
          </form>
        </div>
        <div className='search__content'>
          {!content ? (
            <h1>No result</h1>
          ) : (
            content.map((item) => (
              <SearchRow
                id={item.id}
                poster={item.poster_path}
                overview={item.overview}
                key={item.key}
                media_type='Movie'
                name={item.title || item.name}
              />
            ))
          )}
        </div>
        {content.length !== 0 && (
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
        )}
      </div>
    </div>
  );
}

export default Search;
