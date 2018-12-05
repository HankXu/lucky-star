import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Setting.css';

class Setting extends Component {
  render() {
    return (
      <div className="Setting">
        <header className="Setting-header">
          <img src={logo} className="Setting-logo" alt="logo" />
          <p>
            This is setting page.
          </p>
          <Link className="Setting-link" to="/home">To Home Page</Link>
        </header>
      </div>
    );
  }
}

export default Setting;
