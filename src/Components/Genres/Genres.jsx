import React, { useEffect } from "react";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import { Chip } from "@material-ui/core";

function Genres({
  type,
  selectedGenres,
  setselectedGenres,
  setgenres,
  genres,
  setcurrentPage,
}) {
  const handleAdd = (genre) => {
    setselectedGenres([...selectedGenres, genre]);
    setgenres(genres.filter((g) => g.id !== genre.id));
    setcurrentPage(1);
  };

  const handleRemove = (genre) => {
    setselectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setgenres([...genres, genre]);
    setcurrentPage(1);
  };

  // Fetch Genres
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `/genre/${type}/list?api_key=${APP_KEY}&language=en-US`
    );
    setgenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setgenres({});
    };
  }, []);

  return (
    <div>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{
              margin: 2,
              fontWeight: "500",
              fontSize: "1rem",
              backgroundColor: "rgb(245, 197, 24)",
              color: "#fff",
            }}
            clickable
            size='small'
            key={genre.id}
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2, fontWeight: "500", fontSize: "1rem" }}
            clickable
            size='small'
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
}

export default Genres;
