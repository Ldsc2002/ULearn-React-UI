import React from 'react';

// This context is filled out by App when navigating into a screen.
const ScreenContext = React.createContext({
  appActions: {},
  deviceInfo: {},
});
export default ScreenContext;
