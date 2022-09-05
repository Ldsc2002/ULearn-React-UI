import React, { Component } from 'react'
import CalendarioComp from './CalendarioComp.jsx'
import ScreenContext from '../app/ScreenContext'

export default class calendario extends Component {
    static contextType = ScreenContext

    render() {
        console.log('HOLA WENA TARDE')
        return (

            <div className="Calendario">
                <div className="container has-text-centered">
                    <CalendarioComp
                        email={this.context.userInfo.email}
                    />
                </div>
            </div>
        )
    }
}
