import React from 'react'
import ScreenContext from '../app/ScreenContext'
import CalendarioComp from './CalendarioComp'

function calendario() {
    return (
        <div className="Calendario">
            <div className="container has-text-centered">
                <CalendarioComp />
            </div>
        </div>
    )    
}

export default calendario