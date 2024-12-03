import { Button, Container, Stack } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const Second = () => {
  return (
    <Container>
      <Stack direction={"column"}>
        Second
        <Button variant="contained">Hello world</Button>
        <Link to={"/"}>To first</Link>
      </Stack>
    </Container>
  )
}

export default Second
