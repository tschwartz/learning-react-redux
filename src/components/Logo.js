import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
        <h1><Link to="/">Reduxstagram</Link></h1>
    );
  }
}

export default Logo;
