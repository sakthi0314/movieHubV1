import React from "react";
import Banner from "./Banner/Banner";
import NetlfixOriginals from "./NetlfixOriginals/NetlfixOriginals";
import Typemovies from "./TypeMovie/TypeMovie";
import TypeShows from "./TypeShows/TypeShows";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies";

function Homepage() {
  return (
    <>
      <Banner />
      <UpcomingMovies />
      <Typemovies />
      <NetlfixOriginals />
      <TypeShows />
    </>
  );
}

export default Homepage;
