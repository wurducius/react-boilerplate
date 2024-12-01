import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Second from "./views/y"
import First from "./views/x"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/x"} element={<Second />} />
        <Route path={"/"} element={<First />} />
      </Routes>
    </BrowserRouter>
  )
}
