import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { First, Second } from "./views"

export const AppRouter = () => {
  return (
    <BrowserRouter basename={"/react-boilerplate"}>
      <Routes>
        <Route path={"/x"} element={<Second />} />
        <Route path={"/"} element={<First />} />
      </Routes>
    </BrowserRouter>
  )
}
