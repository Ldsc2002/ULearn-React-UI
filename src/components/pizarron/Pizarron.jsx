import React, { Component } from 'react'
import ScreenContext from '../app/ScreenContext'
import {
    Stickies,
} from './indexPizarron'

export default class extends Component {
    static contextType = ScreenContext

    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            showTape: true,
            showTitle: true,
            output: '',
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

    /* istanbul ignore next */
    toggleValue(e) {
        this.setState({
            [e.target.name]: !this.state[e.target.name],
        })
    }

    render() {
        const wrapperStyle = {}

        return (
            <div>
                <Stickies
                    notes={this.state.notes}
                    tape={this.state.showTape}
                    style={{ float: 'left' }}
                    title={this.state.showTitle}
                    footer={this.state.showFooter}
                    onChange={this.onChange}
                    wrapperStyle={wrapperStyle}
                    university={this.context.userInfo.university}
                    type={this.context.userInfo.type}
                />
            </div>
        )
    }
}
