import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home"
import Player from "./components/player"
import SongList from "./components/songList"
import Login from "./components/login"
import {HashRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/songList" component={SongList}></Route>
              <Route path="/player" component={Player}></Route>
              <Route path="/" component={Home}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
