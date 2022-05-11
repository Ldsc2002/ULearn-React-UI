import React, { Component, Fragment } from 'react';
import './Calendar.css'
import ScreenContext from './ScreenContext';

import CalendarioComp from './CalendarioComp.js';

// UI framework component imports

export default class Calendario extends Component {

  static contextType = ScreenContext;

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    
    return (
      <div className="Calendario">
        <Fragment>
          <div className="container has-text-centered">
            <CalendarioComp/>
          </div>
        </Fragment>
      </div>
    )
  }
}
