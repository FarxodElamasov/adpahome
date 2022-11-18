import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from "react-i18next"
import ChartsComp from "./chartsLib/chartsComp"

export default function Home() {
  const { t } = useTranslation()

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid xs={7}>
        <h1>{t("admin.drawer.home")}</h1>
        <ChartsComp/>
      </Grid>
    </Grid>
  )
}