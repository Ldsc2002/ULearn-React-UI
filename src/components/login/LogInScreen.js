import React, { Component } from 'react'
import {
    setPersistence, signInWithEmailAndPassword, browserLocalPersistence,
} from 'firebase/auth'
import Input from 'muicss/lib/react/input'
import Checkbox from 'muicss/lib/react/checkbox'
import Button from 'muicss/lib/react/button'
import ScreenContext from '../app/ScreenContext'
import img_elCit from '../../images/CrearCuentaScreen_elCitCopy_837553.jpg'
import img_elPerson from '../../images/CrearCuentaScreen_elPerson_405468.png'

import { auth } from '../firebase/firebase'

// UI framework component imports

export default class LogInScreen extends Component {
    static contextType = ScreenContext;

    constructor(props) {
        super(props)

        this.state = {
            loginEmail: '',
            loginPassword: '',
        }
    }

  textInputChanged_elField = (event) => {
      this.setState({ field: event.target.value })
      this.setState({ loginEmail: event.target.value })
  }

  getValue_elField = () => this.state.field || ''

  textInputChanged_elFieldCopy = (event) => {
      this.setState({ fieldCopy: event.target.value })
      this.setState({ loginPassword: event.target.value })
  }

  getValue_elFieldCopy = () => this.state.fieldCopy || ''

  getValue_elCheckbox = () => (this.state.checkbox !== undefined ? this.state.checkbox : 'false')

  checkboxChanged_elCheckbox = (event) => {
      this.setState({ checkbox: (event.target.checked ? 'true' : 'false') })
  }

  onClick_elButton = async () => {
      // Go to screen 'LogIn'
      try {
          const user = await signInWithEmailAndPassword(
              auth,
              this.state.loginEmail,
              this.state.loginPassword,
          )

          setPersistence(auth, browserLocalPersistence).then(() => user)

          this.context.appActions.goToScreen('start', this.context.baseScreenId, { transitionId: 'fadeIn' })
      } catch (error) {
          alert('El correo o la contraseña ingresados no son válidos.')
      }
  }

  onClick_elButtonCopy = async () => {
      // Go to screen 'CrearCuenta'
      this.context.appActions.goToScreen('crearCuenta', this.context.baseScreenId, { transitionId: 'fadeIn' })
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

      const style_elCit = {
          backgroundImage: `url(${img_elCit})`,
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

      const style_elFieldCopy = {
          display: 'block',
          paddingTop: 0,
          textAlign: 'left',
          pointerEvents: 'auto',
      }

      const checked_checkbox = this.getValue_elCheckbox()

      const style_elCheckbox = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      }

      const style_elButton = {
          display: 'block',
          color: '(null)',
          backgroundColor: 'rgba(250, 54, 54, 1.000)',
          textAlign: 'center',
          cursor: 'pointer',
          pointerEvents: 'auto',
      }

      const style_elButtonCopy = {
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
          <div className="AppScreen LogInScreen" style={baseStyle}>
              <div className="background">
                  <div className="containerMinHeight elCit" style={style_elCit} />
              </div>

              <div className="layoutFlow" style={layoutFlowStyle}>
                  <div className="elCard" style={style_elCard_outer}>
                      <div className="cardBg" />
                  </div>

                  <div className="elField">
                      <Input className="baseFont" style={style_elField} type="email" placeholder="alguien@ejemplo.com" onChange={this.textInputChanged_elField} value={this.getValue_elField()} />
                  </div>

                  <div className="elFieldCopy">
                      <Input className="baseFont" style={style_elFieldCopy} type="password" placeholder="Contraseña" onChange={this.textInputChanged_elFieldCopy} value={this.getValue_elFieldCopy()} />
                  </div>

                  <div className="elCheckbox">
                      <Checkbox className="baseFont" style={style_elCheckbox} label="Recordarme" checked={checked_checkbox === 'true' || checked_checkbox === true || `${checked_checkbox}` === '1'} onChange={this.checkboxChanged_elCheckbox} />
                  </div>

                  <div className="elButton">
                      <Button className="actionFont" style={style_elButton} color="accent" onClick={this.onClick_elButton}>
                          Iniciar sesión
                      </Button>
                  </div>

                  <div className="elButtonCopy">
                      <Button className="actionFont" style={style_elButtonCopy} onClick={this.onClick_elButtonCopy}>
                          Crear cuenta
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
