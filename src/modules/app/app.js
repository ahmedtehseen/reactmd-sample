import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './app.css';

export class App extends Component {
  render() {
    return (
      <div>
      	<Navbar />
        {this.props.children}
      </div>
    );
  }
}
