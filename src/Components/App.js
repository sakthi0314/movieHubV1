import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Movies from "../Pages/Movies/Movies";
import Persons from "../Pages/Persons/Persons";
import Search from "../Pages/Search/Search";
import Series from "../Pages/Series/Series";
import Trendings from "../Pages/Trendings/Trendings";
import ContentDetails from "./ContentDetails/ContentDetails";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/trendings' component={Trendings} />
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
        <Route path='/persons' component={Persons} />
        <Route path='/search' component={Search} />
        <Route path='/:id' component={ContentDetails} />
      </Switch>
    </Router>
  );
}

export default App;
