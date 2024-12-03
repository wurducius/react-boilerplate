import React from "react"
import "./styles/base.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { theme } from "./styles/theme"
import { AppRouter } from "./AppRouter"

const App = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(`./service-worker.js`)
    console.log("Service worker registered.")
  }

  return (
    <HelmetProvider>
      <Provider store={store}>
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  )
}

export default App
