import { Button, Container, Stack, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { increment, selectCount } from "../features/counter/counter"
import { useAppDispatch, useAppSelector } from "../app/hooks"

const First = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <Container>
      <Stack direction={"column"}>
        INDEX
        <Typography>{`Count = ${count}`}</Typography>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(increment())
          }}
        >
          Add
        </Button>
        <Link to={"/x"}>To second</Link>
      </Stack>
    </Container>
  )
}

export default First
