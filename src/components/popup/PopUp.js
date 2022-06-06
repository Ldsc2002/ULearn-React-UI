import React from 'react'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button id='pop_up_btn_close' type="button" className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
            </div>
        </div>
    )
        : ''
}

export default PopUp
