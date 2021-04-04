import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Log from "../Pages/Log/Log";
import Movies from "../Pages/Movies/Movies";
import Persons from "../Pages/Persons/Persons";
import Search from "../Pages/Search/Search";
import Series from "../Pages/Series/Series";
import Trendings from "../Pages/Trendings/Trendings";
import ContentDetails from "./ContentDetails/ContentDetails";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import ShowDetail from "./ShowDetails/ShowDetail";
import TrendDetails from "./TrendDetail/TrendDetails";
import TrendDetailTv from "./TrendDetailTv/TrendDetailTv";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/trendings' exact component={Trendings} />
        <Route path='/movies' exact component={Movies} />
        <Route path='/series' exact component={Series} />
        <Route path='/persons' component={Persons} />
        <Route path='/search' component={Search} />
        <Route path='/logout' exact component={Log} />
        <Route path='/series/:tv' component={ShowDetail} />
        <Route path='/movies/:movie' component={ContentDetails} />
        <Route path='/trendings/:id' component={TrendDetails} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
