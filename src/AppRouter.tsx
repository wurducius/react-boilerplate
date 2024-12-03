import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { First, Second } from "./views"
import Config from "./config"

export const AppRouter = () => {
  return (
    <BrowserRouter basename={Config.relativeUrl}>
      <Routes>
        <Route path={"/x"} element={<Second />} />
        <Route path={"/"} element={<First />} />
      </Routes>
    </BrowserRouter>
  )
}
