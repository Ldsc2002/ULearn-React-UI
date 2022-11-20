import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './components/app/App'

import './style/app.css'
import './style/book.css'
import './style/calendar.css'
import './style/index.css'
import './style/login.css'
import './style/mui.min.css'
import './style/palette.css'
import './style/popUp.css'
import './style/styles.css'

const root = createRoot(document.getElementById('root'))
root.render(<HashRouter><App /></HashRouter>)
