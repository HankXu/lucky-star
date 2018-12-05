import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Setting from './components/setting/Setting';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route path='/setting' component={Setting}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
