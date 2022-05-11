import React, { Component } from 'react';
import ScreenContext from '../app/ScreenContext';
import Bookshelf from './bookShelf';

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
