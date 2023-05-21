import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './theme/GlobalStyle.js'
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App/>
  </React.StrictMode>,
)
