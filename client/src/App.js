import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnTap from './Pages/OnTap';
import Home from './Pages/Home';
// import Games from './Pages/Games';
// import Guides from './Pages/Guides';
// import Food from './Pages/Food';
// import Playlist from './Pages/Playlist';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={OnTap} />
              <Route path="/home" component={Home} />
          </Switch>
      </Router>
    );
  }

}

export default App;

