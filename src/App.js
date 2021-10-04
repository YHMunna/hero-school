import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import NotFound from "./Components/NotFound/NotFound";
import Extracurricular from "./Components/Extracurricular/Extracurricular";
import AcademicService from "./Components/AcademicService/AcademicService";
import Courses from "./Components/Courses/Courses";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/course">
            <Courses></Courses>
          </Route>
          <Route exact path="/extra">
            <Extracurricular></Extracurricular>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
