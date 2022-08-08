import React from 'react'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button id='close-btn' type="button" className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
            </div>
        </div>
    )
        : ''
}

export default PopUp
