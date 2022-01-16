import "./App.css";
import "./index.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from "./components/pages/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurants from "./components/pages/restaurants";
import Cities from "./components/pages/cities";
import Places from "./components/pages/places";
import Maps from "./components/pages/map";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/places" component={Places} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route exact path="/map" component={Maps} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
