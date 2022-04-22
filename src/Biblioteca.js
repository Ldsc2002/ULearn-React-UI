import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import btn_icon_24447 from './images/btn_icon_24447.png';
import btn_icon_121752 from './images/btn_icon_121752.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Biblioteca extends Component {

  static contextType = ScreenContext;

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elText = {
      color: 'black',
      textAlign: 'center',
     };
    
    const style_elFabCopy = {
      display: 'block',
      textTransform: 'none',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elFab = {
      display: 'block',
      textTransform: 'none',
      color: '(null)',
      textAlign: 'center',
     };
    
    return (
      <div className="Biblioteca">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.context.locStrings.pizarron2_text_523858}</div>
            </div>
          </div>
        </div>
        
        <div className="foreground">
          <Button className="actionFont elFabCopy" style={style_elFabCopy}  variant="fab" color="accent" >
            <img src={btn_icon_24447} alt="" style={{width: '50.000%', marginTop: '25.000%'}} />
          </Button>
          <Button className="actionFont elFab" style={style_elFab}  variant="fab" color="accent" >
            <img src={btn_icon_121752} alt="" style={{width: '50.000%', marginTop: '25.000%'}} />
          </Button>
        </div>
      </div>
    )
  }
  
}
