import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid xs={5}>
        <h1>{t("admin.drawer.home")}</h1>
      </Grid>
    </Grid>
  )
}