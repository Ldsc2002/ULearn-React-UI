import React, { Component } from 'react';
import ScreenContext from '../../ScreenContext';
import Pizarron from '../pizarron/Pizarron';
import Biblioteca from '../biblioteca/Biblioteca';
import Calendario from '../calendario/Calendario';
import Usuario from '../user/Usuario';
import TabBarButton from '../navigation/TabBarButton';

export default class StartScreen extends Component {

  static contextType = ScreenContext;


  constructor(props) {
    super(props);
    
    this.state = {
      elTabContent_stateIndex: 0,
    };
  }

  selectorSelectionChanged = (idx, ev) => {
    this.setState({selectedIndex_selector: idx});
    this.context.appActions.updateDataSlot('ds_SlotSelectedTab', idx.toString());
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.context.transitionId && this.context.transitionId.length > 0 && this.context.atTopOfScreenStack && this.context.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.context.transitionId;
    }
    if ( !this.context.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const selectedIndex_selector = (() => {
      let val = (this.context.appActions.dataSlots ? this.context.appActions.dataSlots['ds_SlotSelectedTab'] : '');
      if (val !== undefined) {
        val = parseInt(val, 10);
        if ( !isNaN(val)) {
          return val;
        }
      }
      return isNaN(this.state.selectedIndex_selector) ? 0 : this.state.selectedIndex_selector;
    })();
    
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    
    let contentElement_elTabContent;
    switch (selectedIndex_selector) {
      default:
      case 0:
        contentElement_elTabContent = (<Pizarron {...this.props} />);
      break;
      case 1:
        contentElement_elTabContent = (<Biblioteca {...this.props} />);
      break;
      case 2:
        contentElement_elTabContent = (<Calendario {...this.props} />);
      break;
      case 3:
        contentElement_elTabContent = (<Usuario {...this.props} />);
      break;
    }
    
    
    const style_elRectangle = {
      background: 'rgba(161, 14, 24, 1.000)',
     };
    const style_elSelector = {
      overflow: 'hidden',  // This element is not in scroll flow
     };
    // eslint-disable-next-line no-unused-vars
    const style_elSelector_part = {
      display: 'inline-block',
      position: 'relative',
      width: '25.0%',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>       
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elTabContent">
            <div>
              {contentElement_elTabContent}
            </div>
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elRectangle" style={style_elRectangle} />
            <div className="hasNestedComps elSelector" style={style_elSelector}>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 0)}><TabBarButton visualStateIndex={selectedIndex_selector === 0 ? 1 : 0} title='Pizarrón' unselectedStateIndex='0' selectedStateIndex='0' /></div>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 1)}><TabBarButton visualStateIndex={selectedIndex_selector === 1 ? 1 : 0} title='Biblioteca' /></div>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 2)}><TabBarButton visualStateIndex={selectedIndex_selector === 2 ? 1 : 0} title='Calendario' /></div>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 3)}><TabBarButton visualStateIndex={selectedIndex_selector === 3 ? 1 : 0} title='Usuario' /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
