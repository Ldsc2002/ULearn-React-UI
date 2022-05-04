import React, { Component, Fragment } from 'react';
import './Calendar.css'
import ScreenContext from './ScreenContext';
import btn_icon_210788 from './images/btn_icon_210788.png';

import CalendarioComp from './CalendarioComp.js';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Calendario extends Component {

  static contextType = ScreenContext;

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    const style_elFab = {
      display: 'block',
      textTransform: 'none',
      color: '(null)',
      textAlign: 'center',
     };
    
    return (
      <div className="Calendario">
        <Fragment>
          <div className="container has-text-centered">
            <CalendarioComp/>
          </div>
        </Fragment>
        
        <div className="foreground">
          <Button className="actionFont elFab" style={style_elFab}  variant="fab" color="accent" >
            <img src={btn_icon_210788} alt="" style={{width: '50.000%', marginTop: '25.000%'}} />
          </Button>
        </div>
      </div>
    )
  }
}
