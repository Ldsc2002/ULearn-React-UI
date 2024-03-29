import React, { Component } from 'react'

import {
    createUserWithEmailAndPassword, updateProfile,
} from 'firebase/auth'

import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import ScreenContext from '../app/ScreenContext'
import img_elCitCopy from '../../images/books.jpg'
import img_elPerson from '../../images/CrearCuentaScreen_elPerson_405468.png'

import { auth, db } from '../firebase/firebase'

// UI framework component imports

export default class CrearCuentaScreen extends Component {
    static contextType = ScreenContext

    constructor(props) {
        super(props)

        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: '',
            registerMajor: '',
            registerCollege: '',
            errorType: '',
        }
    }

    getValue_elField2 = () => this.state.field2 || ''

    getValue_elField = () => this.state.field || ''

    getValue_elFieldCopy2 = () => this.state.fieldCopy2 || ''

    getValue_elFieldCopy = () => this.state.fieldCopy || ''

    getValue_Universidad = () => this.state.universidad || ''

    onClick_elButtonCopy = async () => {
        // Go to screen 'CrearCuenta'
        // Go to screen 'LogIn'
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                this.state.registerEmail,
                this.state.registerPassword,
            )

            updateProfile(auth.currentUser, {
                displayName: this.state.registerName,
                photoURL: this.state.registerMajor,
            })

            db.collection('usuarios').doc((auth.currentUser).uid).set({
                usuario: this.state.registerEmail,
                nombre: this.state.registerName,
                carrera: this.state.registerMajor,
                universidad: this.state.registerCollege,
                tipo: false,

            })

            /* istanbul ignore next */
            this.context.userInfo.university = this.state.registerCollege
            /* istanbul ignore next */
            this.context.userInfo.type = false
            /* istanbul ignore next */
            this.context.userInfo.name = this.state.registerName
            /* istanbul ignore next */
            this.context.userInfo.mayor = this.state.registerMajor
            /* istanbul ignore next */
            this.context.userInfo.email = this.state.loginEmail

            /* istanbul ignore next */
            this.context.appActions.goToScreen('start', this.context.baseScreenId, { transitionId: 'fadeIn' })
        } catch (error) {
            /* istanbul ignore next */
            if ((error.code === 'auth/user-not-found') || (this.state.errorType === 'auth/user-not-found')) {
                alert('Usario no existe.\nPor favor cree una cuenta.')
            } else if (error.code === 'auth/wrong-password' || (this.state.errorType === 'auth/wrong-password')) {
                alert('Contraseña incorrecta.\nIntente de nuevo.')
            } else if (error.code === 'auth/email-already-in-use' || (this.state.errorType === 'auth/email-already-in-use')) {
                alert('Por favor utilice otro correo.\nEste correo ya esta en uso.', [
                    {
                        text: 'Ok',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    {
                        text: 'Contactar a servicio tecnico',
                        onPress: () => window.open('mailto:ara20261@uvg.edu.gt'),
                    },
                ])
            } else if (error.code === 'auth/invalid-email' || (this.state.errorType === 'auth/invalid-email')) {
                alert('Correo invalido.\nPor favor revise que haya ingresado un correo valido.')
            } else {
                alert('Error desconocido.\nIntente más tarde.')
            }
        }
    }

    /* istanbul ignore next */
    textErrorTypeChanged_elField = (error) => {
        this.setState({ errorType: error })
    }

    /* istanbul ignore next */
    textInputChanged_elField = (event) => {
        this.setState({ field: event.target.value })
        this.setState({ registerName: event.target.value })
    }

    /* istanbul ignore next */
    textInputChanged_elField2 = (event) => {
        this.setState({ field2: event.target.value })
        this.setState({ registerMajor: event.target.value })
    }

    /* istanbul ignore next */
    textInputChanged_elFieldCopy2 = (event) => {
        this.setState({ fieldCopy2: event.target.value })
        this.setState({ registerEmail: event.target.value })
    }

    /* istanbul ignore next */
    textInputChanged_elFieldCopy = (event) => {
        this.setState({ fieldCopy: event.target.value })
        this.setState({ registerPassword: event.target.value })
    }

    /* istanbul ignore next */
    textInputChanged_Universidad = (event) => {
        this.setState({ universidad: event.target.value })
        this.setState({ registerCollege: event.target.value })
    }

    /* istanbul ignore next */
    onClick_elButton = async () => {
        // Go to screen 'LogIn'
        this.context.appActions.goToScreen('logIn', this.context.baseScreenId, { transitionId: 'fadeIn' })
    }

    render() {
        const layoutFlowStyle = {}
        const baseStyle = {}
        /* istanbul ignore next */
        if (this.context.transitionId && this.context.transitionId.length > 0 && this.context.atTopOfScreenStack && this.context.transitionForward) {
            baseStyle.animation = `0.25s ease-in-out ${this.context.transitionId}`
        }
        /* istanbul ignore next */
        if (!this.context.atTopOfScreenStack) {
            layoutFlowStyle.height = '100vh'
            layoutFlowStyle.overflow = 'hidden'
        }

        const style_elCitCopy = {
            backgroundImage: `url(${img_elCitCopy})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
        }
        const style_elCard_outer = {
            boxSizing: 'border-box',
            backgroundColor: 'white',
            filter: 'drop-shadow(0.0px 2.3px 18px rgba(0, 0, 0, 0.1600))',
            overflow: 'visible',
        }

        const style_elField = {
            display: 'block',
            paddingTop: 0,
            textAlign: 'left',
            pointerEvents: 'auto',
        }

        const style_elButtonCopy = {
            display: 'block',
            color: '(null)',
            textAlign: 'center',
            backgroundColor: 'rgba(250, 54, 54, 1.000)',
            cursor: 'pointer',
            pointerEvents: 'auto',
        }

        const style_elButton = {
            display: 'block',
            color: '#fff',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5000)',
            cursor: 'pointer',
            pointerEvents: 'auto',
        }
        const style_elPerson = {
            backgroundImage: `url(${img_elPerson})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
        }

        return (
            <div className="AppScreen CrearCuentaScreen" style={baseStyle}>
                <div className="background">
                    <div className="containerMinHeight elCitCopy" style={style_elCitCopy} />
                </div>

                <div className="layoutFlow" style={layoutFlowStyle}>
                    <div className="elCard" style={style_elCard_outer}>
                        <div className="cardBg" />
                    </div>

                    <div className="elField">
                        <Input className="baseFont" style={style_elField} type="text" placeholder="Nombre completo" onChange={this.textInputChanged_elField} value={this.getValue_elField()} />
                    </div>

                    <div className="elFieldCopy">
                        <select className="baseFont" id="uni" style={style_elField} placeholder="Universidad" onChange={this.textInputChanged_Universidad} value={this.getValue_Universidad()}>
                            <option disabled value="">
                                Universidad
                            </option>
                            <option value="ufm">Universidad Francisco Marroquin</option>
                            <option value="umg">Universidad Mariano Galvez</option>
                            <option value="url">Universidad Rafael Landivar</option>
                            <option value="usac">Universidad San Carlos de Guatemala</option>
                            <option value="uvg">Universidad del Valle de Guatemala</option>
                        </select>
                    </div>

                    <div className="elFieldCopy">
                        <select className="baseFont" id="carrera" style={style_elField} placeholder="Carrera" onChange={this.textInputChanged_elField2} value={this.getValue_elField2()}>
                            <option disabled value="">
                                Carrera
                            </option>
                            <option value="Ingeniería Biomédica">Ingeniería Biomédica</option>
                            <option value="Ingeniería Biotecnología Industrial">Ingeniería Biotecnología Industrial</option>
                            <option value="Ingeniería en Ciencias de Alimentos">Ingeniería en Ciencias de Alimentos</option>
                            <option value="Ingeniería en Ciencias de Alimentos Industrial">Ingeniería en Ciencias de Alimentos Industrial</option>
                            <option value="Ingeniería en Ciencias de la Administración">Ingeniería en Ciencias de la Administración</option>
                            <option value="Ingeniería en Ciencia de los Datos">Ingeniería en Ciencia de los Datos</option>
                            <option value="Ingeniería Civil">Ingeniería Civil</option>
                            <option value="Ingeniería Civil Ambiental">Ingeniería Civil Ambiental</option>
                            <option value="Ingeniería Civil Arquitectónica">Ingeniería Civil Arquitectónica</option>
                            <option value="Ingeniería Civil Industrial">Ingeniería Civil Industrial</option>
                            <option value="Ingeniería en Computación y Tecnologías de la Información">Ingeniería en Computación y Tecnologías de la Información</option>
                            <option value="Ingeniería Electrónica">Ingeniería Electrónica</option>
                            <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                            <option value="Ingeniería Mecánica">Ingeniería Mecánica</option>
                            <option value="Ingeniería Mecánica Industrial">Ingeniería Mecánica Industrial</option>
                            <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                            <option value="Ingeniería Química">Ingeniería Química</option>
                            <option value="Ingeniería Química Industrial">Ingeniería Química Industrial</option>

                        </select>
                    </div>

                    <div className="elFieldCopy2">
                        <Input className="baseFont" style={style_elField} type="email" placeholder="alguien@ejemplo.com" onChange={this.textInputChanged_elFieldCopy2} value={this.getValue_elFieldCopy2()} />
                    </div>

                    <div className="elFieldCopy2">
                        <Input className="baseFont" style={style_elField} type="password" placeholder="Contraseña" onChange={this.textInputChanged_elFieldCopy} value={this.getValue_elFieldCopy()} />
                    </div>

                    <div className="elButtonCopy">
                        <Button className="actionFont" style={style_elButtonCopy} color="accent" onClick={this.onClick_elButtonCopy}>
                            Crear cuenta
                        </Button>
                    </div>

                    <div className="elButton">
                        <Button className="actionFont" style={style_elButton} onClick={this.onClick_elButton}>
                            Iniciar sesión
                        </Button>
                    </div>
                </div>

                <div className="screenFgContainer">
                    <div className="foreground">
                        <div className="elPerson" style={style_elPerson} />
                    </div>
                </div>
            </div>
        )
    }
}
