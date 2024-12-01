import { Button, Container, Stack } from "@mui/material"
import React from "react"

const Second = () => {
  return (
    <Container>
      <Stack direction={"column"}>
        Second
        <Button variant="contained">Hello world</Button>
      </Stack>
    </Container>
  )
}

export default Second
