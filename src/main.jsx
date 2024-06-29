import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from "./theme/theme"
import GlobalStyle from './theme/global'
import { ThemeProvider } from 'styled-components'

import Login from "./pages/login"
import Signin from "./pages/signin"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Signin />
    </ThemeProvider>
  </React.StrictMode>,
)
