import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.scss";

import Aboutus from "./Components/Aboutus/aboutus";
import Contacts from "./Components/Contacts/contacts";
import Departments from "./Components/Departments/departments";
import Home from "./Components/Home/home.js";
import Events from "./Components/Events/events_alt.js";

import TopBar from './Components/TopBar/topbar_alt';

const App = () => (
  <Router>
      <TopBar />
      <Route path="/aboutus" exact component={Aboutus} />
      <Route path="/departments" exact component={Departments} />
      <Route path="/events" exact component={Events} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/" exact component={Home} />
    </Router>
);

export default App;