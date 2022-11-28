import React from "react";
import { Grid } from "@mui/material";
import MyTable from "./Table/Table";

export default function Users() {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid xs={7}>
        <MyTable />
      </Grid>
    </Grid>
  );
}
