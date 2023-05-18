import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx'
import { GlobalStyle } from './theme/GlobalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
