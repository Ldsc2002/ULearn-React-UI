import React, { Component } from 'react'

import Button from 'muicss/lib/react/button'
import ScreenContext from '../app/ScreenContext'
import img_fakeUser from '../../images/studentUlearn.jpeg'

import { auth, db } from '../firebase/firebase'

export default class Usuario extends Component {
    // This component doesn't use any properties
    static contextType = ScreenContext

    constructor(props) {
        super(props)

        this.state = {
            s_email: '',
            s_name: '',
            s_major: '',
        }
    }

    componentDidMount() {
        this.setState({ s_email: this.context.userInfo.email })
        this.setState({ s_name: this.context.userInfo.name })
        this.setState({ s_major: this.context.userInfo.mayor })
    }

    onClick_LogOut = async () => {
        auth.signOut()
        this.context.appActions.goToScreen('logIn', this.context.baseScreenId, { transitionId: 'fadeIn' })
    }

    render() {
        const style_elBackgroundShape = {
            background: 'rgba(255, 255, 255, 1.000)',
        }
        const style_elText = {
            color: 'black',
            textAlign: 'center',
        }
        const style_userPic = {
            height: 200,
            width: 200,
            borderRadius: 100,
        }
        const style_name = {
            color: 'black',
            paddingTop: '30px',
            fontFamily: 'Arial',
        }
        const style_info = {
            color: 'black',
            paddingTop: '10px',
            fontFamily: 'Arial',
        }
        const style_elButton = {
            display: 'block',
            color: '#fff',
            textAlign: 'center',
            backgroundColor: 'rgba(250, 54, 54, 1.000)',
            cursor: 'pointer',
            pointerEvents: 'auto',
        }

        return (
            <div className="Usuario">
                <div className="background">
                    <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
                </div>

                <div className="layoutFlow">
                    <div className="elText">
                        <div className="baseFont" style={style_elText}>
                            <img src={img_fakeUser} style={style_userPic} alt="Imagen de usuario" />
                            <div className="name" style={style_name}>{this.state.s_name}</div>
                            <div className="info" style={style_info}>{this.state.s_major}</div>
                            <div className="info" style={style_info}>{this.state.s_email}</div>
                        </div>
                    </div>
                    <div className="elButton">
                        <Button className="elButton" style={style_elButton} onClick={this.onClick_LogOut}>Cerrar Sesión</Button>
                    </div>
                </div>

            </div>
        )
    }
}
