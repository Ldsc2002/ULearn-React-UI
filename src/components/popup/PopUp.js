import React from 'react'

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Cerrar</button>
        </div>
    </div>
  ) 
  : "";
}

export default PopUp