import React, { useEffect } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"
import { Button } from "@mui/material"

function App() {
  useEffect(() => {
    axios
      .get("/user?ID=12345")
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/x"} element={<>X</>} />
          <Route
            path={"/"}
            element={
              <>
                INDEX
                <Button variant="contained">Hello world</Button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
