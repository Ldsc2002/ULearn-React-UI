import React, { Component } from 'react'
import ScreenContext from '../app/ScreenContext'

export default class TabBarButton extends Component {
    // Properties used by this component:
    // title, visualStateIndex
    static contextType = ScreenContext

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    renderState0() {
        const value_title = ((val) => {
            // make sure value is in string format
            if (val instanceof String || typeof val === 'string') return val

            try {
                return JSON.stringify(val)
            } catch (e) {
                /* istanbul ignore next */
                return val.toString()
            }
        })(this.props.title)

        const style_state0_elTitle = {
            color: '#fefeff',
            textAlign: 'center',
        }

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
            /* istanbul ignore next */
            if (val instanceof String || typeof val === 'string') return val

            try {
                return JSON.stringify(val)
            } catch (e) {
                /* istanbul ignore next */
                return val.toString()
            }
        })(this.props.title)

        const style_state1_elTitle = {
            color: '#fa3636',
            textAlign: 'center',
        }

        const style_state1_elSelectionMarker = {
            background: 'rgba(250, 54, 54, 1.000)',
        }

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

    /* istanbul ignore next */
    render() {
        switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
        case 0:
            return this.renderState0()
        case 1:
            return this.renderState1()
        default:
            return ''
        }
    }
}
