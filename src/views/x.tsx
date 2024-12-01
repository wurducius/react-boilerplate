import { Button, Container, Stack } from "@mui/material"
import React from "react"

const First = () => {
  return (
    <Container>
      <Stack direction={"column"}>
        INDEX
        <Button variant="contained">Hello world</Button>
      </Stack>
    </Container>
  )
}

export default First
