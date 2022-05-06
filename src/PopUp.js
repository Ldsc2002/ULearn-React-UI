import React from 'react'
import './PopUp.css'

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'></div>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Cerrar</button>
            {props.children }
    </div>
  ) 
  : "";
}

export default PopUp