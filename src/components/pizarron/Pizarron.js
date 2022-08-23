import React, { Component } from 'react'
import ScreenContext from '../app/ScreenContext'
import {
    Stickies,
} from './indexPizarron'

import 'firebase/firestore'

export default class extends Component {
    static contextType = ScreenContext;
    
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            showTape: true,
            showTitle: true,
            output: '',
            colors: ['#FFFFFF'],

        }
        this.toggleValue = this.toggleValue.bind(this)
        this.onChange = this.onChange.bind(this)
        
    }

    onChange(notes) {
        this.setState({
            output: JSON.stringify(notes, null, 2),
            notes,
        })
    }

    toggleValue(e) {
        this.setState({
            [e.target.name]: !this.state[e.target.name],
        })
    }

    render() {
        let wrapperStyle = {}
        if (this.state.showBound) {
            wrapperStyle = {
                height: '700px',
                width: '700px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '2px solid #fff',
                overflow: 'auto',
                padding: '10px',
            }
        }
        return (
            <div>
                <Stickies
                    notes={this.state.notes}
                    tape={this.state.showTape}
                    style={{ float: 'left' }}
                    colors={this.state.showCustomColors ? this.state.colors : undefined}
                    title={this.state.showTitle}
                    footer={this.state.showFooter}
                    onChange={this.onChange}
                    wrapperStyle={wrapperStyle}
                    university= {this.context.userInfo.university}
                    type={this.context.userInfo.type}
                />
            </div>
        )
    }
}
