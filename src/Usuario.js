import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import Button from 'muicss/lib/react/button';

import img_fakeUser from './images/studentUlearn.jpeg';

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

  onClick_LogOut = async () => {
    // Go to screen 'LogIn'
    this.context.appActions.goToScreen('logIn', this.context.baseScreenId, { transitionId: 'fadeIn' });
  
  }

  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elText = {
      color: 'black',
      textAlign: 'center',
     };
     const style_userPic = {
      height: 200,
      width: 200,
      borderRadius: 100
     };
     const style_name = {
      color: "black",
      paddingTop: "30px",
      fontFamily: "Arial"
     };
     const style_info = {
      color: "black",
      paddingTop: "10px",
      fontFamily: "Arial"
     };
     const style_elButton = {
      display: 'block',
      color: '#fff',
      textAlign: 'center',
      backgroundColor: 'rgba(250, 54, 54, 1.000)',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Usuario">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <img src={img_fakeUser} style={style_userPic}/>
              <div className="name" style={style_name}>John Doe</div>
              <div className="info" style={style_info}>Ingenieria en Ciencias de la Computacion y Tecnologias de la Informacion</div>
              <div className="info" style={style_info}>3er año, primer semestre</div>
            </div>
          </div>
          <div className="elButton">
            <Button className="elButton" style={style_elButton} onClick={this.onClick_LogOut} >LOG OUT</Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}
