import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import logo from '../../logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <p>
            <Button type="primary">ant</Button>
          </p>
          <Link className="Home-link" to="/setting">To Setting Page</Link>
        </header>
      </div>
    );
  }
}

export default Home;
