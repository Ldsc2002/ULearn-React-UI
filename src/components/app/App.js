import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import ScreenContext from './ScreenContext'
import StartScreen from '../start/StartScreen'
import CrearCuentaScreen from '../signup/CrearCuentaScreen'
import LogInScreen from '../login/LogInScreen'

import { auth } from '../firebase/firebase'

class App extends Component {
    constructor(props) {
        super(props)
        this.dataSlots = {}
        this.dataSlots.ds_SlotSelectedTab = '0'

        this.state = {
        }
    }

  windowDidResize = () => {
      const w = window.innerWidth
      let formatId
      if (w < 576) formatId = 'narrow-phone'
      else if (w < 768) formatId = 'wide-phone'
      else if (w < 1024) formatId = 'narrow-tablet'
      else formatId = 'wide-tablet'
      if (formatId !== this.state.screenFormatId) {
          this.setState({ screenFormatId: formatId })
      }
  }

  componentDidMount() {
      this.windowDidResize()
      window.addEventListener('resize', this.windowDidResize)
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.windowDidResize)
  }

  goToScreen = (screenId, baseScreenId, props) => {
      // Implemented with React Router's 'history' object.
      // 'baseScreenId' is set when inside a container such as a tab bar.
      let path = `/${screenId}`
      if (baseScreenId && baseScreenId.length > 0) {
          path = `/${baseScreenId}${path}`
          props = {}
      }
      this.props.history.push(path, { ...props })
      window.scrollTo(0, 0)
  }

  updateDataSlot = (slotId, value, actionId) => {
      // This method is the default implementation and could be customized by a state management plugin.
      if (value === this.dataSlots[slotId]) return

      this.dataSlots[slotId] = value
      this.setState({})
  }

  render() {
      const makeScreen = (screenId, baseProps, atTop, forward, subpathId) => {
          const screenCtxProps = {
              ...baseProps,
              atTopOfScreenStack: atTop,
              transitionForward: forward,
              appActions: this,
              deviceInfo: {
                  screenFormatId: this.state.screenFormatId,
              },
          }
          let screen
          switch (screenId) {
          case 'crearCuenta':
              screen = <CrearCuentaScreen {...baseProps} />
              break
          case 'logIn':
              screen = <LogInScreen {...baseProps} />
              break
          case 'start':
              if (auth.currentUser === null) {
                  screen = <LogInScreen {...baseProps} />
              } else {
                  screen = <StartScreen {...baseProps} />
              }
              break
          default:
              screen = null
          }
          if (screen) {
              return <ScreenContext.Provider value={screenCtxProps}>{screen}</ScreenContext.Provider>
          }
      }

      return (
          <div className="App">
              <Switch>
                  <Route path="/" render={(props) => makeScreen('logIn', props.location.state, true, true)} exact />
                  <Route
                      path="/crearCuenta"
                      render={(props) => makeScreen('crearCuenta', props.location.state, true, true)}
                  />
                  <Route
                      path="/logIn"
                      render={(props) => makeScreen('logIn', props.location.state, true, true)}
                  />
                  <Route
                      path="/start"
                      render={(props) => makeScreen('start', props.location.state, true, true)}
                  />
              </Switch>
          </div>
      )
  }
}
export default withRouter(App)
