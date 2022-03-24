import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';

export default class TabBarButton extends Component {

  static contextType = ScreenContext;

  // Properties used by this component:
  // title, visualStateIndex

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

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    const value_title = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.title);
    
    const style_state0_elTitle = {
      color: '#fefeff',
      textAlign: 'center',
     };
    
    return (
      <div className="TabBarButton">
        <div className="foreground">
          <div className="baseFont state0_elTitle" style={style_state0_elTitle}>
            <div>{value_title}</div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    const value_title = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.title);
    
    const style_state1_elTitle = {
      color: '#fa3636',
      textAlign: 'center',
     };
    
    const style_state1_elSelectionMarker = {
      background: 'rgba(250, 54, 54, 1.000)',
     };
    
    return (
      <div className="TabBarButton">
        <div className="foreground">
          <div className="baseFont state1_elTitle" style={style_state1_elTitle}>
            <div>{value_title}</div>
          </div>
          <div className="state1_elSelectionMarker" style={style_state1_elSelectionMarker} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
