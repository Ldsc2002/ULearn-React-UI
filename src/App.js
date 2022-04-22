import React, { Component } from 'react';
// eslint-disable-next-line
import { Route, Switch, withRouter } from 'react-router-dom';
// eslint-disable-next-line
import './App.css';
import ScreenContext from './ScreenContext.js';
import StartScreen from './StartScreen.js';
import CrearCuentaScreen from './CrearCuentaScreen.js';
import LogInScreen from './LogInScreen.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.dataSlots = {};
    this.dataSlots['ds_SlotSelectedTab'] = "0";

    this.state = {
      screenTransitionForward: true,
    }

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, baseScreenId, props) => {
    // Implemented with React Router's 'history' object.
    // 'baseScreenId' is set when inside a container such as a tab bar.
    let path = '/'+screenId;
    if (baseScreenId && baseScreenId.length > 0) {
      path = '/'+baseScreenId+path;
      props = {};
    }
    this.props.history.push(path, {...props});
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // Implemented with React Router's 'history' object.
    this.props.history.goBack();
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    if (value === this.dataSlots[slotId])
      return;

    this.dataSlots[slotId] = value;
    this.setState({});
  }

  createImageUrlFromProp = (prop) => {
    if (prop instanceof Object) {
      if (prop.type != null && prop.type === 'image' && prop.path != null) {
        return "(null)"+prop.path;
      }
    }
    return prop;
  }

  render() {
    const makeScreen = (screenId, baseProps, atTop, forward, subpathId) => {
      let screenCtxProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
      };
      let screen;
      switch (screenId) {
        case 'crearCuenta':
          screen = <CrearCuentaScreen {...baseProps} />;
          break;
        case 'logIn':
          screen = <LogInScreen {...baseProps} />;
          break;
        case 'start':
          screen = <StartScreen {...baseProps} />;
          break;
        default:
          screen = null;
      }
      if (screen) {
        return <ScreenContext.Provider value={screenCtxProps}>{screen}</ScreenContext.Provider>;
      }
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/" render={(props) => makeScreen('logIn', props.location.state, true, true)} exact />
          <Route path="/crearCuenta" render={(props) => {
            return makeScreen('crearCuenta', props.location.state, true, true);
          }} />
          <Route path="/logIn" render={(props) => {
            return makeScreen('logIn', props.location.state, true, true);
          }} />
          <Route path="/start" render={(props) => {
            return makeScreen('start', props.location.state, true, true);
          }} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)