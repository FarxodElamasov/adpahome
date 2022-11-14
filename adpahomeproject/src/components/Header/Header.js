import React from 'react'
import { Grid } from '@mui/material'


export default function Header() {
  return (
    <Grid container direction="row" justifyContent="center">
    <Grid xs={5}>
      <h1>Hello Header</h1>
    </Grid>
  </Grid>
  )
}
