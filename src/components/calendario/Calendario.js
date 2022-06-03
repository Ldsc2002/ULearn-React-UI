import React, { Component } from 'react'
import ScreenContext from '../app/ScreenContext'
import CalendarioComp from './CalendarioComp'

// UI framework component imports

export default class Calendario extends Component {
    // This component doesn't use any properties
    static contextType = ScreenContext;

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="Calendario">
                <div className="container has-text-centered">
                    <CalendarioComp />
                </div>
            </div>
        )
    }
}
