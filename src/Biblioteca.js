import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import Bookshelf from './bookshelf';

export default class Biblioteca extends Component {

  static contextType = ScreenContext;

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    return (
      <div>
          <Bookshelf/>
      </div>
    )
  }
  
}
