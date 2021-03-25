import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Movies from "../Pages/Movies/Movies";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Persons from "../Pages/Persons/Persons";
import Search from "../Pages/Search/Search";
import Series from "../Pages/Series/Series";
import Trendings from "../Pages/Trendings/Trendings";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='app'>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/trendings' component={Trendings} />
          <Route path='/movies' component={Movies} />
          <Route path='/series' component={Series} />
          <Route path='/persons' component={Persons} />
          <Route path='/search' component={Search} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
