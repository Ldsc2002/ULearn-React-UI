import React, { Component } from 'react'
import Bookshelf from './bookShelf'
import ScreenContext from '../app/ScreenContext'

export default class Biblioteca extends Component {
    static contextType = ScreenContext;

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Bookshelf />
            </div>
        )
    }
}
