import React from "react";
import Banner from "./Banner/Banner";
import NetlfixOriginals from "./NetlfixOriginals/NetlfixOriginals";
import WhatsNew from "./WhatsNew/WhatsNew";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies";

function Homepage() {
  return (
    <>
      <Banner />
      <UpcomingMovies />
      <WhatsNew />
      <NetlfixOriginals />
    </>
  );
}

export default Homepage;
