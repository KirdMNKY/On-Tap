import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnTap from './Pages/OnTap';
import Home from './Pages/Home';
import Login from './components/Login/Login';
import './App.css';
import Game from './Pages/Game';
import Guides from './Pages/Guides';
import Guide from './Pages/Guide';
import Food from './Pages/Food';
import Playlist from './Pages/Playlist';
import Signup from './components/Signup/Signup';

import music from './images/EQIcon.gif';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={OnTap} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/guides" component={Guides} />
            <Route exact path="/guides/:id" component={Guide}/>
            <Route exact path="/food" component={Food} />
            <Route exact path="/playlist" component={Playlist} />
          </Switch>
          <img id="eq" src={ music } />
        </div>
      </Router>
    );
  }
}

export default App;

