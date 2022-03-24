import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';

export default class Usuario extends Component {

  static contextType = ScreenContext;

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elText = {
      color: 'black',
      textAlign: 'center',
     };
    
    return (
      <div className="Usuario">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.context.locStrings.usuario_text_600685}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
