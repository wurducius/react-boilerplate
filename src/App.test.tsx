import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { Button } from "@mui/material"

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Button>Test</Button>
    </Provider>,
  )

  expect(getByText(/Test/i)).toBeInTheDocument()
})
