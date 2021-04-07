import { Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchRow from "../../Components/SearchRow/SearchRow";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import "./Search.scss";

function Search() {
  const [currentPage, setcurrentPage] = useState(1);
  const [type, setType] = useState(0);
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    window.scroll(0, 0);
  };

  const handlePre = () => {
    setcurrentPage(currentPage - 1);
    window.scroll(0, 0);
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `/search/${
        type ? "tv" : "movie"
      }?api_key=${APP_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    setContent(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(async () => {
    await fetchSearch();
  }, [type, currentPage, query]);

  return (
    <div className='search'>
      <div className='search__container'>
        <form className='search__form' onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleInput}
            className='search__input'
            placeholder='Search here for movie are Tv series'
          />
          <div className='search__content'></div>

          <button type='submit' className='search__btn primary'>
            Search
          </button>
        </form>

        <Tabs
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);
          }}
          style={{
            color: "rgb(245, 197, 24)",
            marginBottom: "2vh",
          }}
        >
          <Tab label='Search Movies' />
          <Tab label='Search Tv Series' />
        </Tabs>

        <div className='search__content'>
          {content &&
            content.map((item) => (
              <SearchRow
                key={item.id}
                id={item.id}
                name={item.title || item.name}
                overview={item.overview}
                media_type={type ? "tv" : "movie"}
                poster={item.poster_path}
              />
            ))}
        </div>

        {content.length != 0 && (
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
