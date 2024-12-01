import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { Helmet, HelmetProvider } from "react-helmet-async"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
