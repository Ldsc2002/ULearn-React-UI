import React, { Component } from 'react'

import {
    createUserWithEmailAndPassword, updateProfile,
} from 'firebase/auth'

import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import ScreenContext from '../app/ScreenContext'
import img_elCitCopy from '../../images/CrearCuentaScreen_elCitCopy_837553.jpg'
import img_elPerson from '../../images/CrearCuentaScreen_elPerson_405468.png'

import { auth, db } from '../firebase/firebase'

// UI framework component imports

export default class CrearCuentaScreen extends Component {
    static contextType = ScreenContext;

    constructor(props) {
        super(props)

        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: '',
            registerMajor: '',
        }
    }

  textInputChanged_elField = (event) => {
      this.setState({ field: event.target.value })
      this.setState({ registerName: event.target.value })
  }

  getValue_elField = () => this.state.field || ''

  textInputChanged_elField2 = (event) => {
      this.setState({ field2: event.target.value })
      this.setState({ registerMajor: event.target.value })
  }

    getValue_elField2 = () => this.state.field2 || ''

  textInputChanged_elFieldCopy2 = (event) => {
      this.setState({ fieldCopy2: event.target.value })
      this.setState({ registerEmail: event.target.value })
  }

  getValue_elFieldCopy2 = () => this.state.fieldCopy2 || ''

  textInputChanged_elFieldCopy = (event) => {
      this.setState({ fieldCopy: event.target.value })
      this.setState({ registerPassword: event.target.value })
  }

  getValue_elFieldCopy = () => this.state.fieldCopy || ''

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

          db.collection('usuarios').add({
              usuario: this.state.registerEmail,
              nombre: this.state.registerName,
              carrera: this.state.registerMajor,
          })

          this.context.appActions.goToScreen('start', this.context.baseScreenId, { transitionId: 'fadeIn' })
      } catch (error) {
          alert('Los datos ingresados no son v??lido, por favor intente nuevamente.')
      }
  }

  onClick_elButton = async () => {
      // Go to screen 'LogIn'
      this.context.appActions.goToScreen('logIn', this.context.baseScreenId, { transitionId: 'fadeIn' })
  }

  render() {
      const layoutFlowStyle = {}
      const baseStyle = {}
      if (this.context.transitionId && this.context.transitionId.length > 0 && this.context.atTopOfScreenStack && this.context.transitionForward) {
          baseStyle.animation = `0.25s ease-in-out ${this.context.transitionId}`
      }
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
                      <Input className="baseFont" style={style_elField} type="text" placeholder="Carrera" onChange={this.textInputChanged_elField2} value={this.getValue_elField2()} />
                  </div>

                  <div className="elFieldCopy2">
                      <Input className="baseFont" style={style_elField} type="email" placeholder="alguien@ejemplo.com" onChange={this.textInputChanged_elFieldCopy2} value={this.getValue_elFieldCopy2()} />
                  </div>

                  <div className="elFieldCopy">
                      <Input className="baseFont" style={style_elField} type="password" placeholder="Contrase??a" onChange={this.textInputChanged_elFieldCopy} value={this.getValue_elFieldCopy()} />
                  </div>

                  <div className="elButtonCopy">
                      <Button className="actionFont" style={style_elButtonCopy} color="accent" onClick={this.onClick_elButtonCopy}>
                          Crear cuenta
                      </Button>
                  </div>

                  <div className="elButton">
                      <Button className="actionFont" style={style_elButton} onClick={this.onClick_elButton}>
                          Iniciar sesi??n
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
