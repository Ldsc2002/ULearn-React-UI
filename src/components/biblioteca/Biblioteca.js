import React, { Component } from 'react'
import Bookshelf from './bookShelf'
import ScreenContext from '../app/ScreenContext'

export default class Biblioteca extends Component {
    static contextType = ScreenContext;

    render() {
        return (
            <div>
                <Bookshelf 
                university= {this.context.userInfo.university}
                type={this.context.userInfo.type}/>
            </div>
        )
    }
}
