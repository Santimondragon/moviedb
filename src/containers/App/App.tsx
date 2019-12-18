/* jslint esversion: 6 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Topbar from '../../components/Topbar/Topbar';
import Favorites from '../../components/Favorites/Favorites';
import Movies from '../../components/Movies/Movies';
import Navbar from './../../components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <section id="app">
      <Navbar/>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/favorites'>
          <Topbar/>
          <Favorites/>
        </Route>

        <Route exact path='/movies'>
          <Topbar/>
          <Movies/>
        </Route>

        <Route exact path='/lists'>
          <Topbar/>
        </Route>

      </Switch>
    </section>
  );
}

export default App;

